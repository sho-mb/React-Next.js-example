export type Hamburger = {
  id: number,
  url: string,
  name: string,
  sauces: [
    {
      id: number,
      name: string,
      cost: number,
      isVegan: boolean,
      isSpicy: boolean,
    }
  ],
  price: number,
  toppings: [
    {
      id: number,
      name: string,
      cost: number,
    }
  ],
}

export type FoodItem = {
  id: number;
  name: string;
  sauces: null | string[]; // Adjust the type accordingly
  price: number;
  toppings: null | string[]; // Adjust the type accordingly
};

// export type Toppings = {
//   toppings: [
//     {
//       id: number,
//       name: string,
//       cost: number,
//     }
//   ],
// }

export type ToppingField = {
  id: number,
  name: string,
  cost: number,
}

export type SauceField = {
  id: number,
  name: string,
  cost: number,
  isVegan: boolean,
  isSpicy: boolean,
}