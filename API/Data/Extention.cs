namespace mangoBargurShop.Data;

public static class Extention
{
  public static void CreateDbIfNotExists(this IHost host)
  {
    {
      using (var scope = host.Services.CreateScope())
      {
        var services = scope.ServiceProvider;
        var context = services.GetRequiredService<HamburgerContext>();
        context.Database.EnsureCreated();
        DbInitializer.Initialize(context);
      }
    }
  }
}