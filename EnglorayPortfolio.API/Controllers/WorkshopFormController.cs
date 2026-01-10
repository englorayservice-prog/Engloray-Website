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
    public class WorkshopFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;



        public WorkshopFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromBody] WorkshopFormDto dto)
        {
            // 1️⃣ Required validation
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Phone) ||
                string.IsNullOrWhiteSpace(dto.WorkshopName))
            {
                return BadRequest(new { message = "All required fields must be filled." });
            }

            // 2️⃣ Name validation
            if (!Regex.IsMatch(dto.Name, @"^[a-zA-Z\s]+$"))
                return BadRequest(new { message = "Name must contain only letters and spaces." });

            // 3️⃣ Email validation
            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest(new { message = "Invalid email format." });

            // 4️⃣ Phone validation
            if (!Regex.IsMatch(dto.Phone, @"^\d{10}$"))
                return BadRequest(new { message = "Phone number must be 10 digits." });


            // 6️⃣ Save to DB
            var form = new WorkshopForm
            {
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                WorkshopName = dto.WorkshopName,
                Message = dto.Message
            };

            _db.WorkshopForms.Add(form);
            await _db.SaveChangesAsync();

            // 7️⃣ Send Email
            await SendWorkshopEmail(form);

            return Ok(new { message = "Workshop registration submitted successfully!" });
        }

        // 📧 Email logic
        private async Task SendWorkshopEmail(WorkshopForm form)
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
                Subject = "New Workshop Registration",
                Body =
$@"New Workshop Registration Received

Name: {form.Name}
Email: {form.Email}
Phone: {form.Phone}
Workshop: {form.WorkshopName}

Message:
{form.Message}

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

        // GET: api/workshopform
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _db.WorkshopForms
                .OrderByDescending(w => w.CreatedAt)
                .ToListAsync();

            return Ok(data);
        }
    }
}
