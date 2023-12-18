using mangoBargurShop.Model;

namespace mangoBargurShop.Data;

public static class DbInitializer
{
  public static void Initialize(HamburgerContext context)
  {
    if (context.Hamburgers.Any() && context.Toppings.Any() && context.Sauces.Any())
    {
      return;
    }

    var lettuceTopping = new Topping { Name = "Lettuce" , Cost = 0.18};
    var tomatoSliceTopping = new Topping { Name = "Tomato Slice" , Cost = 0.25};
    var diceOninonTopping = new Topping { Name = "Dice Onion" , Cost = 0.125};
    var grilledOnionTopping = new Topping { Name = "Grilled Onion" , Cost = 0.25};
    var sliceOnionTopping = new Topping { Name = "Slice Onion" , Cost = 0.125};
    var smashAvocadTopping = new Topping { Name = "Smash Avocad" , Cost = 0.25};
    var sliceAvocadTopping = new Topping { Name = "Slice Avocad" , Cost = 0.25};
    var eggTopping = new Topping { Name = "Egg" , Cost = 0.25};
    var picklesTopping = new Topping { Name = "Pickles" , Cost = 0.25};
    var cheeseSliceTopping = new Topping { Name = "Cheese Slice" , Cost = 0.25};
    var creameCheeseTopping = new Topping { Name = "Cream Cheese" , Cost = 0.25};
    var jalapenoTopping = new Topping { Name = "jalapeno" , Cost = 0.25};
    var aussieBeefPattyTopping = new Topping { Name = "180g Aussie Beed Patty" , Cost = 1.5};
    var aussieBeefNomalPattyTopping = new Topping { Name = "100g Aussie Beed Patty" , Cost = 1.0};
    var wagyuBeefPattyTopping = new Topping { Name = "100g Wagyu Beef Patty" , Cost = 1.25};
    var friedChickenTopping = new Topping { Name = "100g Fried Chicken" , Cost = 0.75};
    var doubleCheeseTopping = new Topping { Name = "Double cheese", Cost = 0.5};
    var doubleAussieBeefPattyTopping = new Topping { Name = "Double  Beef Patty", Cost = 2.0};

    var mustard = new Sauce { Name = "Mustard", Cost = 0.125, IsSpicy = false, IsVegan = false};
    var kechap = new Sauce { Name = "Kechap", Cost = 0.125, IsSpicy = false, IsVegan = false};
    var mayonnaise = new Sauce { Name = "Mayonnaise", Cost = 0.125, IsSpicy = false, IsVegan = true};
    var sriracha = new Sauce { Name = "Sriracha", Cost = 0.25, IsSpicy = true, IsVegan = false};
    var bbq = new Sauce { Name = "Bbq", Cost = 0.25, IsSpicy = false, IsVegan = true};
    var tomatoSauce = new Sauce { Name = "Tomato Sauce", Cost = 0.5, IsSpicy = false, IsVegan = true};
    var bigMacSauce = new Sauce { Name = "Big Mac Sauce", Cost = 0.5, IsSpicy = false, IsVegan = false};
    var periperiSauce = new Sauce { Name = "Peri Peri Mayo", Cost = 0.5, IsSpicy = true, IsVegan = false};
    var burgerSauce = new Sauce { Name = "Burger sauce", Cost = 0.5, IsSpicy = false, IsVegan = false};
  
    var hamburgers = new Hamburger[]
    {
      new Hamburger
          {
            Name = "Big Mac",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              bigMacSauce
            }, 
            Price = 9.0,
            Toppings = new List<Topping>
            {
              doubleAussieBeefPattyTopping,
              lettuceTopping,
              tomatoSliceTopping,
              sliceOnionTopping,
              cheeseSliceTopping,
              picklesTopping
            }
          },
      new Hamburger 
          {
            Name = "Quarter Pounder",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              kechap,
              mustard
            },
            Price = 8.0,
            Toppings = new List<Topping>
            {
              aussieBeefPattyTopping,
              doubleCheeseTopping,
              sliceOnionTopping,
              picklesTopping
            }
          },
      new Hamburger 
          {
            Name = "Cheesy Wagyu",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              sriracha
            },
            Price = 9.0,
            Toppings = new List<Topping>
            {
              wagyuBeefPattyTopping,
              cheeseSliceTopping,
              grilledOnionTopping,
              jalapenoTopping,
              creameCheeseTopping
            }
          },
      new Hamburger 
          {
            Name = "Mega Wagyu",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              burgerSauce
            },
            Price = 11.0,
            Toppings = new List<Topping>
            {
              wagyuBeefPattyTopping,
              wagyuBeefPattyTopping,
              cheeseSliceTopping,
              tomatoSliceTopping,
              sliceOnionTopping,
              lettuceTopping,
              picklesTopping
            }
          },
      new Hamburger 
          {
            Name = "Mega Mac",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              kechap,
              burgerSauce
            },
            Price = 11.0,
            Toppings = new List<Topping>
            {
              doubleAussieBeefPattyTopping,
              doubleCheeseTopping,
              sliceOnionTopping,
              picklesTopping,
              tomatoSliceTopping,
              lettuceTopping,
              eggTopping
            }
          },
      new Hamburger 
          {
            Name = "Peri Peri burserk",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              periperiSauce
            },
            Price = 8.0,
            Toppings = new List<Topping>
            {
              friedChickenTopping,
              tomatoSliceTopping,
              cheeseSliceTopping,
              diceOninonTopping,
              jalapenoTopping,
              lettuceTopping
            }
          },
      new Hamburger 
          {
            Name = "Feel good",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              bbq
            },
            Price = 8.0,
            Toppings = new List<Topping>
            {
              aussieBeefNomalPattyTopping,
              smashAvocadTopping,
              lettuceTopping,
              grilledOnionTopping,
              tomatoSliceTopping,
              cheeseSliceTopping
            }
          },
      new Hamburger 
          {
            Name = "Vegieter",
            ImageUrl = "https://api.api-ninjas.com/v1/randomimage?category=Food",
            Sauces = new List<Sauce>
            {
              mayonnaise,
              tomatoSauce
            },
            Price = 6.0,
            Toppings = new List<Topping>
            {
              smashAvocadTopping,
              sliceAvocadTopping,
              lettuceTopping,
              tomatoSliceTopping,
              grilledOnionTopping,
              picklesTopping
            }
          }
    };

    context.Hamburgers.AddRange(hamburgers);
    context.SaveChanges();
  }
}