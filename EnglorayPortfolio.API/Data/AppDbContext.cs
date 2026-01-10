using Microsoft.EntityFrameworkCore;
using EnglorayPortfolio.API.Models;

namespace EnglorayPortfolio.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<EnglorayContactForm> EnglorayContactForms { get; set; }
        public DbSet<InternshipForm> InternshipForms { get; set; }
        public DbSet<AllProgramsForm> AllProgramsForms { get; set; }
        public DbSet<ButtonInternForm> ButtonInternForms { get; set; }
        public DbSet<WorkshopForm> WorkshopForms { get; set; }
        public DbSet<CareerForm> CareerForms { get; set; }
        public DbSet<CourseForm> CourseForms { get; set; }
        public DbSet<MainCourseForm> ButtonCoursesForms { get; set; } 

    }
}
