using EnglorayPortfolio.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace EnglorayPortfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubscribeController : ControllerBase
    {
        private readonly EmailSettings _emailSettings;

        public SubscribeController(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        [HttpPost]
        public async Task<IActionResult> Subscribe([FromBody] SubscribeRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Email))
            {
                return BadRequest("Email address is required.");
            }

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

                    Subject = "Welcome to Engloray Updates!",

                    Body =
$@"Thank you for subscribing to receive updates from Engloray!

Greetings and exciting updates will be on the way shortly.

Best regards,
The Engloray Team
engloray@gmail.com",

                    IsBodyHtml = false
                };

                mail.To.Add(request.Email);
                await smtp.SendMailAsync(mail);

                return Ok(new { message = "Subscribed successfully! Welcome email sent." });
            }
            catch (Exception ex)
            {
                Console.WriteLine("Subscribe Email sending failed: " + ex.Message);
                return StatusCode(500, new { message = "Subscription email failed to send", error = ex.Message });
            }
        }
    }

    public class SubscribeRequest
    {
        public string Email { get; set; } = "";
    }
}
