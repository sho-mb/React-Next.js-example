using mangoBargurShop.Model;
using mangoBargurShop.Model.InputModel;
using mangoBargurShop.Services;
using Microsoft.AspNetCore.Mvc;

namespace mangoBargurShop.Controllers;

[ApiController]
[Route("[controller]")]
public class HamburgerController : ControllerBase
{
  private ILogger<HamburgerController> _logger;
  readonly HamburgerService _service;

  public HamburgerController(ILogger<HamburgerController> logger,
  HamburgerService service)
  {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  public IEnumerable<Hamburger> GetAll()
  {
    return _service.GetAll();
  }

  [HttpGet("{id}")]
  public ActionResult<Hamburger> Get(int id)
  {
    var hamburger = _service.Get(id);

    if (hamburger is not null)
    {
      return hamburger;
    }
    else
    {
      return NotFound();
    }
  }

  [HttpPost]
  public IActionResult Create([FromBody] CreateHamburgerModel newHamburger)
  {
    var hamburger = _service.Create(newHamburger);
    return CreatedAtAction(nameof(Get), new { id = hamburger.Id}, hamburger);
  }

  [HttpPut("{id}/addtopping")]
  public IActionResult AddTopping (int id, [FromBody] ToppingIds toppingIds)
  {
    var pizzaToUpdate = _service.Get(id);

    Console.WriteLine(toppingIds);

    if(pizzaToUpdate is not null)
    {
      _service.AddTopping(id, toppingIds);
      return NoContent();
    }
    else
    {
      return NotFound();
    }
  }

  [HttpPut("{id}/updatesauce")]
  public IActionResult updateSauce(int id, int sauceId, int targetSauceId)
  {
    var hamburgerToUpdate = _service.Get(id);

    if(hamburgerToUpdate is not null)
    {
      _service.updateSauce(id, sauceId, targetSauceId);
      return NoContent();
    }
    else
    {
      return NotFound();
    }
  }

  [HttpPut("{id}/addsauce")]
  public IActionResult AddSauce(int id, int sauceId)
  {
    var hamburgerToUpdate = _service.Get(id);

    if(hamburgerToUpdate is not null)
    {
      _service.addSauce(id, sauceId);
      return NoContent();
    }
    else
    {
      return NotFound();
    }
  }

  [HttpDelete("{id}")]
  public IActionResult Delete(int id)
  {
    var hamburgerToDelete = _service.Get(id);

    if (hamburgerToDelete is not null)
    {
      _service.Delete(id);
      return NoContent();
    }
    else
    {
      return NotFound();
    }
  }

  [HttpDelete("{id}/topping")]
  public IActionResult DeleteTopping(int id, int toppingId) {
    var hamburgerToDelete = _service.Get(id);

      if (hamburgerToDelete is not null)
      {
        _service.DeleteTopping(id, toppingId);
        return NoContent();
      }
      else
      {
        return NotFound();
      }
  }

  [HttpDelete("{id}/sauce")]
  public IActionResult DeleteSauce(int id, int sauceId) {
    var hamburgerToDelete = _service.Get(id);

      if (hamburgerToDelete is not null)
      {
        _service.DeleteSauce(id, sauceId);
        return NoContent();
      }
      else
      {
        return NotFound();
      }
  }
}