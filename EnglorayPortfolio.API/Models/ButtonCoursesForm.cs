using System;
using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.Models
{
    public class MainCourseForm
    {
        public int MainCourseFormId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        public string Phone { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
