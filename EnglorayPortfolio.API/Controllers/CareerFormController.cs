using EnglorayPortfolio.API.Data;
using EnglorayPortfolio.API.DTOs;
using EnglorayPortfolio.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace EnglorayPortfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CareerFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;

        public CareerFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        // POST: api/careerform/submit
        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromBody] CareerFormDto dto)
        {
            // 1️⃣ Required validation
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Role) )
            {
                return BadRequest("All required fields must be filled.");
            }

            // 2️⃣ Name validation
            if (!Regex.IsMatch(dto.Name, @"^[a-zA-Z\s]+$"))
                return BadRequest("Invalid name.");

            // 3️⃣ Email validation
            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest("Invalid email.");

            // 4️⃣ Save to DB
            var form = new CareerForm
            {
                Name = dto.Name,
                Email = dto.Email,
                Role = dto.Role,
                Experience = dto.Experience,
                Message = dto.Message
            };

            _db.CareerForms.Add(form);
            await _db.SaveChangesAsync();

            // 5️⃣ Send email
            try
            {
                await SendCareerEmail(form);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Email failed: {ex.Message}");
            }

            return Ok("Career form submitted successfully.");
        }

        // GET: api/careerform
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _db.CareerForms
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return Ok(data);
        }

        // 📧 EMAIL METHOD
        private async Task SendCareerEmail(CareerForm form)
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
                Subject = "New Career Application",
                Body =
$@"New Career Application Received

Name: {form.Name}
Email: {form.Email}
Role: {form.Role}
Experience: {form.Experience} years
Message: {form.Message}

Submitted At: {form.CreatedAt}",
                IsBodyHtml = false
            };

            message.To.Add(receiverEmail!);

            using var smtp = new SmtpClient(smtpServer!, port)
            {
                Credentials = new NetworkCredential(username, password),
                EnableSsl = true
            };

            await smtp.SendMailAsync(message);
        }
    }
}
