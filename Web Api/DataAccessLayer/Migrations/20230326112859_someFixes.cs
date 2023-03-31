using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccessLayer.Migrations
{
    public partial class someFixes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WriterID",
                table: "Contents");

            migrationBuilder.CreateIndex(
                name: "IX_Headings_CategoryID",
                table: "Headings",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_Headings_WriterID",
                table: "Headings",
                column: "WriterID");

            migrationBuilder.CreateIndex(
                name: "IX_Contents_HeadingID",
                table: "Contents",
                column: "HeadingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Contents_Headings_HeadingID",
                table: "Contents",
                column: "HeadingID",
                principalTable: "Headings",
                principalColumn: "HeadingID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Headings_Categories_CategoryID",
                table: "Headings",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Headings_Writers_WriterID",
                table: "Headings",
                column: "WriterID",
                principalTable: "Writers",
                principalColumn: "WriterID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contents_Headings_HeadingID",
                table: "Contents");

            migrationBuilder.DropForeignKey(
                name: "FK_Headings_Categories_CategoryID",
                table: "Headings");

            migrationBuilder.DropForeignKey(
                name: "FK_Headings_Writers_WriterID",
                table: "Headings");

            migrationBuilder.DropIndex(
                name: "IX_Headings_CategoryID",
                table: "Headings");

            migrationBuilder.DropIndex(
                name: "IX_Headings_WriterID",
                table: "Headings");

            migrationBuilder.DropIndex(
                name: "IX_Contents_HeadingID",
                table: "Contents");

            migrationBuilder.AddColumn<int>(
                name: "WriterID",
                table: "Contents",
                type: "int",
                nullable: true);
        }
    }
}
