namespace EnglorayPortfolio.API.Data
{
    public class EmailSettings
    {
        public string SenderEmail { get; set; } = "";
        public string SenderName { get; set; } = "";
        public string ReceiverEmail { get; set; } = "";
        public string SmtpServer { get; set; } = "";
        public int Port { get; set; }
        public bool UseSSL { get; set; }
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
    }
}
