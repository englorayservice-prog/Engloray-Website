using System;
using System.ComponentModel.DataAnnotations;

namespace EnglorayPortfolio.API.Models
{
    public class AllProgramsForm
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Course { get; set; }  // This will be set per page

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
