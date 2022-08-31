import { AllergenSpec } from './Allergen';

interface Food {
  name: string,
  description: string
  image: string
  allergens: AllergenSpec[]
}

export default Food;
