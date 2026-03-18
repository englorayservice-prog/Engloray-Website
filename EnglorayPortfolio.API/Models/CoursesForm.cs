using System;
using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.Models
{
    public class CourseForm
    {
        public int CourseFormId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Course { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
