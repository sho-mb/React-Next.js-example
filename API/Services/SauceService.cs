using mangoBargurShop.Data;
using mangoBargurShop.Model;
using Microsoft.EntityFrameworkCore;

namespace mangoBargurShop.Services;

public class SauceService
{
  private readonly HamburgerContext _context;

  public SauceService(HamburgerContext context)
  {
    _context = context;
  }

  public List<Sauce> GetAll() {
    return _context.Sauces.AsNoTracking().ToList();
  }

}