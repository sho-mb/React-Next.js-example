using mangoBargurShop.Model;
using mangoBargurShop.Services;
using Microsoft.AspNetCore.Mvc;

namespace mangoBargurShop.Controllers;

[ApiController]
[Route("[controller]")]

public class ToppingController : ControllerBase 
{
  private ILogger<ToppingController> _logger;
  readonly ToppingService _service;

  public ToppingController(ILogger<ToppingController> logger,
  ToppingService service)
  {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  public List<Topping> GetAllTopping() {
    return _service.GetAll();
  }
}
