using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace mangoBargurShop.Model;

public class Topping
{
  public int Id { get; set; }

  [Required]
  public string? Name { get; set; }

  public double Cost { get; set;} 

  [JsonIgnore]
  public ICollection<Hamburger>? Hamburgers { get; set; }
}