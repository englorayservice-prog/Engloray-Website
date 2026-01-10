using System;
using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.Models
{
    public class EnglorayContactForm
    {
        public int EnglorayContactFormId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }   // ✅ NEW

        [Required]
        public string Message { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
