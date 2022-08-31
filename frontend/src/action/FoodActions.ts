import axios from 'axios';
import Food from '../types/Food';
import Allergens, { AllergenSpec, MILK, NUTS } from '../types/Allergen';

const FOODS_PATH = '/foods';
const convert2base64 = (image : File) : Promise<string> => {
  return new Promise<string>((resolve) => {
    const reader :FileReader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      resolve(reader.result as string);
    };
  });
};

export const uploadFood = async ({ name, description, allergens, image }: {name : string, description: string, allergens: string[], image: File | undefined}) => {
  if (!image) {
    return;
  }
  const encodedImage : string = await convert2base64(image);
  const response = await axios.post(FOODS_PATH, { name: name, description: description, allergens: allergens, image: encodedImage });
  console.log({ response });
};

interface FoodFetchDto {
  name : string,
  description : string,
  allergens: string[],
  image: string
}

export const fetchFoods = async () : Promise<Food[]> => {
  const response = await axios.get<FoodFetchDto[]>(FOODS_PATH);
  if (response.status === 200) {
    return response.data.map((dto) : Food => {
      return {
        name: dto.name,
        description: dto.description,
        image: dto.image,
        allergens: dto.allergens.map(allergenValue => {
          return Allergens.find((element) => { return element.value === allergenValue; }) as AllergenSpec;
        })
      };
    });
  }
  return [];
};
