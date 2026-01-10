using System;
using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.Models
{
    public class CareerForm
    {
        public int CareerFormId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        public string Experience { get; set; }

        public string? Message { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
