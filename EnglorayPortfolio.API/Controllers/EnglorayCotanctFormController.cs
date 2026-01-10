using EnglorayPortfolio.API.Data;
using EnglorayPortfolio.API.DTOs;
using EnglorayPortfolio.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;

namespace EnglorayPortfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactFormController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly EmailSettings _emailSettings;

        public ContactFormController(
            AppDbContext context,
            IOptions<EmailSettings> emailSettings)
        {
            _context = context;
            _emailSettings = emailSettings.Value;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitContactForm(
            [FromBody] EnglorayContactFormCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var contactForm = new EnglorayContactForm
            {
                Name = dto.Name,
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber, // ✅ NEW
                Message = dto.Message,
                CreatedAt = DateTime.UtcNow
            };

            await _context.EnglorayContactForms.AddAsync(contactForm);
            await _context.SaveChangesAsync();

            // ✅ Send Email
            try
            {
                using var smtp = new SmtpClient(
                    _emailSettings.SmtpServer,
                    _emailSettings.Port)
                {
                    Credentials = new NetworkCredential(
                        _emailSettings.Username,
                        _emailSettings.Password),
                    EnableSsl = _emailSettings.UseSSL
                };

                var mail = new MailMessage
                {
                    From = new MailAddress(
                        _emailSettings.SenderEmail,
                        _emailSettings.SenderName),

                    Subject = "New Contact Form Submission",

                    Body =
$@"New Contact Form Submission

Name: {contactForm.Name}
Email: {contactForm.Email}
Phone: {contactForm.PhoneNumber}
Message: {contactForm.Message}
Submitted At: {contactForm.CreatedAt}",

                    IsBodyHtml = false
                };

                mail.To.Add(_emailSettings.ReceiverEmail);
                await smtp.SendMailAsync(mail);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Email sending failed: " + ex.Message);
            }

            return Ok(new { message = "Contact form submitted successfully" });
        }
    }
}
