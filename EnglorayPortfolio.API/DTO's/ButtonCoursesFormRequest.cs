namespace EnglorayPortfolio.API.DTOs
{
    public class ButtonCoursesFormDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Course { get; set; }
        public string Phone { get; set; }
        public string? FormType { get; set; } // Optional: to differentiate Button1 or Button2
    }
}
