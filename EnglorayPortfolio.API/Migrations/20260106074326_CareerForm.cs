using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglorayPortfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class CareerForm : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ExperienceYears",
                table: "CareerForms",
                newName: "Experience");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Experience",
                table: "CareerForms",
                newName: "ExperienceYears");
        }
    }
}
