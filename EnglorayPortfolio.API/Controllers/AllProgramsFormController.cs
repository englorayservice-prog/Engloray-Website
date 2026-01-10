using EnglorayPortfolio.API.Data;
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
    public class AllProgramsFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;

        private readonly string[] allowedCourses =
        {
            "Web Developer",
            "Ui/Ux Design",
            "Software Developer",
            "Graphic Design"
        };

        public AllProgramsFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration; // ✅ CRITICAL
        }

        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromBody] AllProgramsFormDto dto)
        {
            // 1️⃣ Validation
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Phone) ||
                string.IsNullOrWhiteSpace(dto.Course))
            {
                return BadRequest("All fields are required.");
            }

            if (!Regex.IsMatch(dto.Name, @"^[a-zA-Z\s]+$"))
                return BadRequest("Invalid name.");

            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest("Invalid email.");

            if (!Regex.IsMatch(dto.Phone, @"^\d{10}$"))
                return BadRequest("Invalid phone number.");

            if (!allowedCourses.Contains(dto.Course))
                return BadRequest("Invalid course.");

            // 2️⃣ Save DB
            var form = new AllProgramsForm
            {
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                Course = dto.Course,
                CreatedAt = DateTime.UtcNow
            };

            _db.AllProgramsForms.Add(form);
            await _db.SaveChangesAsync();

            // 3️⃣ Send Email (SAFE)
            try
            {
                await SendAllProgramsEmail(form);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Email failed: {ex.Message}");
            }

            return Ok("Form submitted & email sent successfully.");
        }

        // 📧 EMAIL METHOD
        private async Task SendAllProgramsEmail(AllProgramsForm form)
        {
            var emailSettings = _configuration.GetSection("EmailSettings");

            var smtpServer = emailSettings["SmtpServer"];
            var port = int.Parse(emailSettings["Port"]!); // ✅ null-safe
            var username = emailSettings["Username"];
            var password = emailSettings["Password"];
            var senderEmail = emailSettings["SenderEmail"];
            var receiverEmail = emailSettings["ReceiverEmail"];

            var mail = new MailMessage
            {
                From = new MailAddress(senderEmail!, "Engloray Portfolio"),
                Subject = "New All Programs Enquiry",
                Body =
$@"New Program Enquiry Received

Name: {form.Name}
Email: {form.Email}
Phone: {form.Phone}
Course: {form.Course}
Submitted At: {form.CreatedAt}",
                IsBodyHtml = false
            };

            mail.To.Add(receiverEmail!);

            using var smtp = new SmtpClient(smtpServer!, port)
            {
                Credentials = new NetworkCredential(username, password),
                EnableSsl = true
            };

            await smtp.SendMailAsync(mail);
        }
    }
}
