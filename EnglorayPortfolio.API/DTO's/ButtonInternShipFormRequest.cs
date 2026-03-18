using Microsoft.AspNetCore.Http;

namespace EnglorayPortfolio.API.DTOs
{
    public class ButtonInternFormDto
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Role { get; set; }

        public string Mode { get; set; }

        public IFormFile Resume { get; set; }
    }
}
