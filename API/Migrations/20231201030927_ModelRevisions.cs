using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mangoBargurShop.Migrations
{
    /// <inheritdoc />
    public partial class ModelRevisions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Hamburgers_Sauces_SauceId",
                table: "Hamburgers");

            migrationBuilder.DropIndex(
                name: "IX_Hamburgers_SauceId",
                table: "Hamburgers");

            migrationBuilder.DropColumn(
                name: "IsCombo",
                table: "Hamburgers");

            migrationBuilder.DropColumn(
                name: "SauceId",
                table: "Hamburgers");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Toppings",
                newName: "Cost");

            migrationBuilder.AddColumn<double>(
                name: "Cost",
                table: "Sauces",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "HamburgerSauce",
                columns: table => new
                {
                    HamburgersId = table.Column<int>(type: "int", nullable: false),
                    SaucesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HamburgerSauce", x => new { x.HamburgersId, x.SaucesId });
                    table.ForeignKey(
                        name: "FK_HamburgerSauce_Hamburgers_HamburgersId",
                        column: x => x.HamburgersId,
                        principalTable: "Hamburgers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HamburgerSauce_Sauces_SaucesId",
                        column: x => x.SaucesId,
                        principalTable: "Sauces",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_HamburgerSauce_SaucesId",
                table: "HamburgerSauce",
                column: "SaucesId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HamburgerSauce");

            migrationBuilder.DropColumn(
                name: "Cost",
                table: "Sauces");

            migrationBuilder.RenameColumn(
                name: "Cost",
                table: "Toppings",
                newName: "Price");

            migrationBuilder.AddColumn<bool>(
                name: "IsCombo",
                table: "Hamburgers",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "SauceId",
                table: "Hamburgers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Hamburgers_SauceId",
                table: "Hamburgers",
                column: "SauceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Hamburgers_Sauces_SauceId",
                table: "Hamburgers",
                column: "SauceId",
                principalTable: "Sauces",
                principalColumn: "Id");
        }
    }
}
