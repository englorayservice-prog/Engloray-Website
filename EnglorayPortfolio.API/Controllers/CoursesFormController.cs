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
    [Route("api/courseform")]
    public class CourseFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;

        // ✅ Courses shown in dropdown


        public CourseFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        // POST: api/courseform/submit
        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromBody] CourseFormDto dto)
        {
            // 1️⃣ Required validation
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Phone) ||
                string.IsNullOrWhiteSpace(dto.Course))
            {
                return BadRequest("All fields are required.");
            }

            // 2️⃣ Name validation
            if (!Regex.IsMatch(dto.Name, @"^[a-zA-Z\s]+$"))
                return BadRequest("Invalid name.");

            // 3️⃣ Email validation
            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest("Invalid email.");

            // 4️⃣ Phone validation
            if (!Regex.IsMatch(dto.Phone, @"^[0-9]{10}$"))
                return BadRequest("Phone must be 10 digits.");



            // 6️⃣ Save to DB
            var form = new CourseForm
            {
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                Course = dto.Course
            };

            _db.CourseForms.Add(form);
            await _db.SaveChangesAsync();

            // 7️⃣ Send email
            try
            {
                await SendCourseEmail(form);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Email failed: {ex.Message}");
            }

            return Ok(new { message = "Course enquiry submitted successfully." });
        }

        // GET: api/courseform
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _db.CourseForms
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();

            return Ok(data);
        }

        // 📧 EMAIL METHOD
        private async Task SendCourseEmail(CourseForm form)
        {
            var emailSettings = _configuration.GetSection("EmailSettings");

            var smtpServer = emailSettings["SmtpServer"];
            var port = int.Parse(emailSettings["Port"]!);
            var username = emailSettings["Username"];
            var password = emailSettings["Password"];
            var senderEmail = emailSettings["SenderEmail"];
            var receiverEmail = emailSettings["ReceiverEmail"];

            var mail = new MailMessage
            {
                From = new MailAddress(senderEmail!, "Engloray Portfolio"),
                Subject = "New Course Enquiry",
                Body =
$@"New Course Enquiry Received

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
