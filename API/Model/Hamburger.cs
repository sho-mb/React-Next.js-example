using System.ComponentModel.DataAnnotations;

namespace mangoBargurShop.Model;

public class Hamburger
{
  public int Id { get; set; }
  [Required]
  public string? Name { get; set; }

  public string? ImageUrl { get; set; }

  public ICollection<Sauce>? Sauces { get; set; }
  public double Price { get; set;} 
  public ICollection<Topping>? Toppings { get; set; }
}