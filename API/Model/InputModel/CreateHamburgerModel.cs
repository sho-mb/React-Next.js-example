namespace mangoBargurShop.Model.InputModel;

public class CreateHamburgerModel
{
  public string? Name { get; set; }
  public int? SaucesId { get; set; }
  public double Price { get; set;} 
  public List<int> ToppingsIds { get; set; }
}