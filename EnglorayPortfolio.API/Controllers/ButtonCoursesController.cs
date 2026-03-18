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
    public class ButtonCoursesFormController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _configuration;

        private readonly string[] allowedCourses = { "Java Fullstack Mastery", "UI/UX Design Mastery", "Graphics Design & Branding" };

        public ButtonCoursesFormController(AppDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        // POST: api/buttoncoursesform/submit
        [HttpPost("submit")]
        public async Task<IActionResult> Submit([FromBody] ButtonCoursesFormDto dto)
        {
            // 1️⃣ Validate required fields
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Phone) ||
                string.IsNullOrWhiteSpace(dto.Course))
            {
                return BadRequest(new { message = "All fields are required." });
            }

            // 2️⃣ Name validation
            if (!Regex.IsMatch(dto.Name, @"^[a-zA-Z\s]+$"))
            {
                return BadRequest(new { message = "Name must contain only letters and spaces." });
            }

            // 3️⃣ Email validation
            if (!Regex.IsMatch(dto.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
            {
                return BadRequest(new { message = "Email is not valid." });
            }

            // 4️⃣ Phone validation (10 digits)
            if (!Regex.IsMatch(dto.Phone, @"^\d{10}$"))
            {
                return BadRequest(new { message = "Phone must be exactly 10 digits." });
            }

            // 5️⃣ Course validation
            //if (!allowedCourses.Contains(dto.Course))
            //{
            //    return BadRequest(new { message = "Invalid course selected." });
            //}

            // 6️⃣ Save to database
            var form = new MainCourseForm
            {
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                Role = dto.Course
            };

            _db.ButtonCoursesForms.Add(form);
            await _db.SaveChangesAsync();

            // 7️⃣ Send email
            await SendButtonCoursesEmail(form, dto.FormType);

            return Ok(new { message = "Form submitted successfully!" });
        }

        // GET: api/buttoncoursesform
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var forms = await _db.ButtonCoursesForms
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return Ok(forms);
        }

        // Private method to send email
        private async Task SendButtonCoursesEmail(MainCourseForm form, string? formType)
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
                Subject = "New Button Courses Form Submission",
                Body =
$@"New form submission received{(string.IsNullOrEmpty(formType) ? "" : $" from {formType}")}

Name: {form.Name}
Email: {form.Email}
Phone: {form.Phone}
Course: {form.Role}
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
