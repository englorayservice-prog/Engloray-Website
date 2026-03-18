using EnglorayPortfolio.API.Data;
using EnglorayPortfolio.API.DTOs;
using EnglorayPortfolio.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using System.Net;
using System.Net.Mail;

namespace EnglorayPortfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ButtonInternFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;

        private readonly string resumeFolder = "UploadedResumes";

        public ButtonInternFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;

            if (!Directory.Exists(resumeFolder))
                Directory.CreateDirectory(resumeFolder);
        }

        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromForm] ButtonInternFormDto dto)
        {
            // 1️⃣ Required fields
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Role) ||
                string.IsNullOrWhiteSpace(dto.Mode) ||
                dto.Resume == null)
            {
                return BadRequest("All fields are required.");
            }

            // 2️⃣ Name validation
            if (!Regex.IsMatch(dto.Name, @"^[a-zA-Z\s]+$"))
                return BadRequest("Invalid name.");

            // 3️⃣ Email validation
            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest("Invalid email.");

            // 4️⃣ Save resume
            string fileName = $"{Guid.NewGuid()}_{dto.Resume.FileName}";
            string filePath = Path.Combine(resumeFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.Resume.CopyToAsync(stream);
            }

            // 5️⃣ Save to DB
            var form = new ButtonInternForm
            {
                Name = dto.Name,
                Email = dto.Email,
                Role = dto.Role,
                Mode = dto.Mode,
                ResumePath = filePath,
                CreatedAt = DateTime.UtcNow
            };

            _db.ButtonInternForms.Add(form);
            await _db.SaveChangesAsync();

            // 6️⃣ Send Email
            try
            {
                await SendButtonInternEmail(form);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Email failed: {ex.Message}");
            }

            return Ok("Form submitted & email sent successfully.");
        }

        // 📧 EMAIL METHOD (WITH RESUME ATTACHMENT)
        private async Task SendButtonInternEmail(ButtonInternForm form)
        {
            var emailSettings = _configuration.GetSection("EmailSettings");

            var smtpServer = emailSettings["SmtpServer"];
            var port = int.Parse(emailSettings["Port"]!);
            var username = emailSettings["Username"];
            var password = emailSettings["Password"];
            var senderEmail = emailSettings["SenderEmail"];
            var receiverEmail = emailSettings["ReceiverEmail"];

            var message = new MailMessage
            {
                From = new MailAddress(senderEmail!, "Engloray Portfolio"),
                Subject = "New Internship Button Application",
                Body =
$@"New Internship Application Received

Name: {form.Name}
Email: {form.Email}
Role: {form.Role}
Mode: {form.Mode}
Submitted At: {form.CreatedAt}",
                IsBodyHtml = false
            };

            message.To.Add(receiverEmail!);

            // 📎 Attach resume
            if (System.IO.File.Exists(form.ResumePath))
            {
                message.Attachments.Add(new Attachment(form.ResumePath));
            }

            using var smtp = new SmtpClient(smtpServer!, port)
            {
                Credentials = new NetworkCredential(username, password),
                EnableSsl = true
            };

            await smtp.SendMailAsync(message);
        }

        // GET: api/buttoninternform
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _db.ButtonInternForms
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return Ok(data);
        }
    }
}
