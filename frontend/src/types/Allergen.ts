export type AllergenSpec = {
  label : string,
  value : string
}

export const MILK: AllergenSpec = { label: 'Milk', value: 'milk' };
export const NUTS: AllergenSpec = { label: 'Nuts', value: 'nuts' };
export const EGGS: AllergenSpec = { label: 'Eggs', value: 'eggs' };
export const PEANUTS: AllergenSpec = { label: 'Peanuts', value: 'peanuts' };
export const FISH: AllergenSpec = { label: 'Fish', value: 'fish' };
export const WHEAT: AllergenSpec = { label: 'Wheat', value: 'wheat' };
export const SHELLFISH: AllergenSpec = { label: 'Shellfish', value: 'shellfish' };
export const SOYBEAN: AllergenSpec = { label: 'Soybean', value: 'soybean' };

const Allergens = [
  MILK, NUTS, EGGS, PEANUTS, FISH, WHEAT, SHELLFISH, SOYBEAN
];

export default Allergens;
