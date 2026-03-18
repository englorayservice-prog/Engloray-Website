using System;

namespace EnglorayPortfolio.API.Models
{
    public class ButtonInternForm
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Role { get; set; }

        public string Mode { get; set; }

        public string ResumePath { get; set; }  // Store file path or URL

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
