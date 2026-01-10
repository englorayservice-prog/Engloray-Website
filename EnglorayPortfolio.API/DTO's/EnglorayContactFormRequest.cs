using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.DTOs
{
    public class EnglorayContactFormCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }   // ✅ NEW

        [Required]
        public string Message { get; set; }
    }
}
