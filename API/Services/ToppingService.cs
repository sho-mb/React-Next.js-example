using mangoBargurShop.Data;
using mangoBargurShop.Model;
using Microsoft.EntityFrameworkCore;

namespace mangoBargurShop.Services;

public class ToppingService
{
  private readonly HamburgerContext _context;

  public ToppingService(HamburgerContext context)
  {
    _context = context;
  }

  public List<Topping> GetAll() {
    return _context.Toppings.AsNoTracking().ToList();
  }

}