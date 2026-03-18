using System;

namespace EnglorayPortfolio.API.Models
{
    public class WorkshopForm
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public string WorkshopName { get; set; }
        public string Message { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
