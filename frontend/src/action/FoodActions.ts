import axios from 'axios';

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
  axios.post(FOODS_PATH, { name: name, description: description, allergens: allergens, image: encodedImage });
};
