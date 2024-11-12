export enum Toppings {
  tomatoes = 'tomatoes',
  cheese = 'cheese',
  pickle = 'pickle',
  onion = 'onion',
}

export const ToppingsDictionary: Record<Toppings, string> = {
  [Toppings.tomatoes]: 'Tomatoes',
  [Toppings.cheese]: 'Cheese',
  [Toppings.pickle]: 'Pickle',
  [Toppings.onion]: 'Onion',
};
