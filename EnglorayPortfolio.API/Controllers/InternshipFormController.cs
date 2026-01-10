using EnglorayPortfolio.API.Data;
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
    public class InternshipFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;


        public InternshipFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        // POST: api/internshipform/submit
        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromBody] InternshipFormDto dto)
        {
            // 🔒 Validation
            if (string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Course))
            {
                return BadRequest("All fields are required.");
            }

            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest("Invalid email.");


            // 💾 Save data
            var form = new InternshipForm
            {
                Email = dto.Email,
                Course = dto.Course,
                CreatedAt = DateTime.UtcNow
            };

            _db.InternshipForms.Add(form);
            await _db.SaveChangesAsync();

            // 📧 Send email
            await SendInternshipEmail(form);

            return Ok(new { message = "Internship form submitted successfully." });
        }

        // GET: api/internshipform
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _db.InternshipForms
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();

            return Ok(data);
        }

        // ===============================
        // 📧 EMAIL METHOD (ADD HERE ONLY)
        // ===============================
        private async Task SendInternshipEmail(InternshipForm form)
        {
            var emailSettings = _configuration.GetSection("EmailSettings");

            var smtpServer = emailSettings["SmtpServer"];
            var port = int.Parse(emailSettings["Port"]);
            var username = emailSettings["Username"];
            var password = emailSettings["Password"];
            var senderEmail = emailSettings["SenderEmail"];
            var receiverEmail = emailSettings["ReceiverEmail"];

            var message = new MailMessage
            {
                From = new MailAddress(senderEmail, "Engloray Portfolio"),
                Subject = "New Internship Application",
                Body =
$@"New Internship Application Received

Email: {form.Email}
Course: {form.Course}
Submitted At: {form.CreatedAt}",
                IsBodyHtml = false
            };

            message.To.Add(receiverEmail);

            using var smtp = new SmtpClient(smtpServer, port)
            {
                Credentials = new NetworkCredential(username, password),
                EnableSsl = true
            };

            await smtp.SendMailAsync(message);
        }
    }
}
