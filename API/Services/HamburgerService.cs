using mangoBargurShop.Data;
using mangoBargurShop.Model;
using mangoBargurShop.Model.InputModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mangoBargurShop.Services;

public class HamburgerService
{
  private readonly HamburgerContext _context;

  public HamburgerService(HamburgerContext context)
  {
    _context = context;
  }

  public IEnumerable<Hamburger> GetAll()
  {
    return _context.Hamburgers.AsNoTracking().ToList();
  }

  public Hamburger? Get(int id)
  {
    return _context.Hamburgers
      .Include(h => h.Toppings)
      .Include(h => h.Sauces)
      .AsNoTracking()
      .SingleOrDefault(h => h.Id == id);
  }

  public Hamburger Create(CreateHamburgerModel hamburger)
  {
    var sauce = _context.Sauces.Where(s => s.Id == hamburger.SaucesId).ToList();
    var toppings = _context.Toppings.Where(t => hamburger.ToppingsIds.Contains(t.Id)).ToList();

    var newHamburger = new Hamburger
    {
      Name = hamburger.Name,
      Sauces = sauce,
      Price = hamburger.Price,
      Toppings = toppings
    };

    _context.Hamburgers.Add(newHamburger);
    _context.SaveChanges();
    return newHamburger;
  }

  public void updateSauce(int hamburgerId, int sauceId, int targetSauceId)
  {
    var hamburgerToUpdate = _context.Hamburgers.Include(h => h.Sauces).SingleOrDefault(h => h.Id == hamburgerId);
    var sauceToUpdate = _context.Sauces.Find(sauceId);
    var targetSauce = _context.Sauces.Find(targetSauceId);

    if (hamburgerToUpdate is null || sauceToUpdate is null || targetSauce is null)
    {
      throw new InvalidOperationException("Hamburger or Sauce does not exist");
    }

    if (hamburgerToUpdate.Sauces is null) {
      hamburgerToUpdate.Sauces = new List<Sauce>();
    }

    if (hamburgerToUpdate.Sauces.SingleOrDefault(s => s.Id == targetSauceId) == null) {
      throw new InvalidOperationException("This burger does not use this sauce");
    }

    hamburgerToUpdate.Sauces.Remove(targetSauce);
    hamburgerToUpdate.Sauces.Add(sauceToUpdate);

    _context.SaveChanges();
  }

  public void AddTopping(int hamburgerId, ToppingIds toppings)
  {
    var hamburgerToUpdate = _context.Hamburgers.Find(hamburgerId);

    if (toppings.Toppings is null) {
      throw new InvalidOperationException("No value");
    }

    var toppingsToAdd = _context.Toppings.Where(t => toppings.Toppings.Contains(t.Id)).ToList();

    if (hamburgerToUpdate is null || toppingsToAdd is null)
    {
      throw new InvalidOperationException("Hamburger or topping does not exsist");
    }

    if (hamburgerToUpdate.Toppings is null) {
      hamburgerToUpdate.Toppings = new List<Topping>();
    }

    foreach (Topping topping in toppingsToAdd) {
      hamburgerToUpdate.Toppings.Add(topping);
    }
    
    _context.SaveChanges();
  }

  public void Delete(int hamburgerId)
  {
    var hamburgerToDelete = _context.Hamburgers.Find(hamburgerId);

    if (hamburgerToDelete is not null) {
      _context.Hamburgers.Remove(hamburgerToDelete);
      _context.SaveChanges();
    }
  }

  public void DeleteTopping(int hamburgerId, int toppingId)
  {
    var hamburgerToDelete = _context.Hamburgers
        .Include(h => h.Toppings)
        .Include(s => s.Sauces)
        .FirstOrDefault(h => h.Id == hamburgerId);

    if (hamburgerToDelete != null)
    {
      hamburgerToDelete.Sauces ??= new List<Sauce> ();

      hamburgerToDelete.Toppings ??= new List<Topping> ();

      var toppingToDelete = hamburgerToDelete.Toppings.FirstOrDefault(t => t.Id == toppingId);

      if (toppingToDelete != null)
      {
          hamburgerToDelete.Toppings.Remove(toppingToDelete);

          _context.SaveChanges();
      }
    }
  }

  public void DeleteSauce(int hamburgerId, int sauceId)
  {
    var hamburgerToDelete = _context.Hamburgers
        .Include(h => h.Toppings)
        .Include(s => s.Sauces)
        .FirstOrDefault(h => h.Id == hamburgerId);

    if (hamburgerToDelete != null)
    {
      hamburgerToDelete.Sauces ??= new List<Sauce> ();

      hamburgerToDelete.Toppings ??= new List<Topping> ();

      var sauceToDelete = hamburgerToDelete.Sauces.FirstOrDefault(t => t.Id == sauceId);

      if (sauceToDelete != null)
      {
          hamburgerToDelete.Sauces.Remove(sauceToDelete);

          _context.SaveChanges();
      }
    }
  }

    public void addSauce(int id, int sauceId)
    {
        var hamburgerToUpdate = _context.Hamburgers.Find(id);

        var sauceToAdd = _context.Sauces.Find(sauceId);

        if (hamburgerToUpdate is null || sauceToAdd is null) {
          throw new InvalidOperationException("Hamburger ot Sauce is not exist");
        }

        if (hamburgerToUpdate.Sauces is null) {
          hamburgerToUpdate.Sauces = new List<Sauce>();
        }

        hamburgerToUpdate.Sauces.Add(sauceToAdd);
        _context.SaveChanges();
    }
}