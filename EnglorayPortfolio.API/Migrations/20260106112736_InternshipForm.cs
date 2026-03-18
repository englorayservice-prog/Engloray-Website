using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglorayPortfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class InternshipForm : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "InternshipForms");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "InternshipForms",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
