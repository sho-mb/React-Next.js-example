using mangoBargurShop.Model;
using mangoBargurShop.Services;
using Microsoft.AspNetCore.Mvc;

namespace mangoBargurShop.Controllers;

[ApiController]
[Route("[controller]")]

public class SauceController : ControllerBase 
{
  private ILogger<SauceController> _logger;
  readonly SauceService _service;

  public SauceController(ILogger<SauceController> logger,
  SauceService service)
  {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  public List<Sauce> GetAllSauce() {
    return _service.GetAll();
  }
}
