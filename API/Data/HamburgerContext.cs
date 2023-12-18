using mangoBargurShop.Model;
using Microsoft.EntityFrameworkCore;

namespace mangoBargurShop.Data;

public class HamburgerContext : DbContext
{
  public HamburgerContext(DbContextOptions<HamburgerContext> options) : base(options)
  {
  }

  public DbSet<Hamburger> Hamburgers => Set<Hamburger>();
  public DbSet<Sauce> Sauces => Set<Sauce>();
  public DbSet<Topping> Toppings => Set<Topping>();
}