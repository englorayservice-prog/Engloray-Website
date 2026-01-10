using System;
using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.Models
{
    public class InternshipForm
    {
        public int InternshipFormId { get; set; }


        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Course { get; set; }  // Automatically set per page

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
