using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;

namespace mangoBargurShop.Model;

public class Sauce
{
  public int Id { get; set; }

  [Required]
  public string? Name { get; set; }

  public double Cost { get; set; }

  public bool IsVegan { get; set; }
  
  public bool IsSpicy { get; set; }

  [JsonIgnore]
  public ICollection<Hamburger>? Hamburgers { get; set; }
}