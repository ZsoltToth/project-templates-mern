import React, { ChangeEvent, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel, FormGroup,
  Input,
  InputLabel,
  TextareaAutosize,
  TextField
} from '@material-ui/core';
import { uploadFood } from '../action/FoodActions';
import { EGGS, FISH, MILK, NUTS, PEANUTS, SHELLFISH, SOYBEAN, WHEAT } from '../types/Allergen';
import { v4 as uuidv4 } from 'uuid';

const FoodRecordingPage: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File>();
  const [isAllergenForMilk, setIsAllergenForMilk] = useState<boolean>(false);
  const [isAllergenForNuts, setIsAllergenForNuts] = useState<boolean>(false);
  const [isAllergenForEggs, setIsAllergenForEggs] = useState<boolean>(false);
  const [isAllergenForPeanuts, setIsAllergenForPeanuts] = useState<boolean>(false);
  const [isAllergenForFish, setIsAllergenForFish] = useState<boolean>(false);
  const [isAllergenForWheat, setIsAllergenForWheat] = useState<boolean>(false);
  const [isAllergenForShellfish, setIsAllergenForShellfish] = useState<boolean>(false);
  const [isAllergenForSoybean, setIsAllergenForSoybean] = useState<boolean>(false);

  const getCheckedAllergens = () : string[] => {
    let allergens: string[] = [];
    if (isAllergenForMilk) {
      allergens = [...allergens, MILK.value];
    }
    if (isAllergenForNuts) {
      allergens = [...allergens, NUTS.value];
    }
    if (isAllergenForEggs) {
      allergens = [...allergens, EGGS.value];
    }
    if (isAllergenForPeanuts) {
      allergens = [...allergens, PEANUTS.value];
    }
    if (isAllergenForFish) {
      allergens = [...allergens, FISH.value];
    }
    if (isAllergenForWheat) {
      allergens = [...allergens, WHEAT.value];
    }
    if (isAllergenForShellfish) {
      allergens = [...allergens, SHELLFISH.value];
    }
    if (isAllergenForSoybean) {
      allergens = [...allergens, SOYBEAN.value];
    }
    return allergens;
  };

  const handleSubmit = () => {
    const allergens: string[] = getCheckedAllergens();
    if (!name) {
      return;
    }
    if (!description) {
      return;
    }
    if (!image) {
      return;
    }
    console.log({ allergens });
    uploadFood({
      name,
      description,
      allergens,
      image
    });
  };

  return (<>
    <FormControl>
      <TextField id={'food-name'} label={'Name'} variant={'outlined'} value={name}
                 onChange={(event) => setName(event.target.value)}/>
      <TextareaAutosize minRows={3} value={description} onChange={(event) => {
        setDescription(event.target.value);
      }}/>
      <Input type={'file'} onChange={(event) => {
        const target = event.target as HTMLInputElement;
        const fileList: FileList = target.files || new FileList();
        if (fileList[0] === null) {
          console.log('No file was selected!');
          return;
        }
        setImage(fileList[0]);
      }}/>
      <FormGroup>
        <FormControlLabel control={
          <Checkbox value={MILK.value}
                    onChange={(event, isChecked) => {
                      setIsAllergenForMilk(isChecked);
                    }}/>} label={MILK.label}/>
        <FormControlLabel control={
          <Checkbox value={NUTS.value}
                    onChange={(event, isChecked) => {
                      setIsAllergenForNuts(isChecked);
                    }}/>} label={NUTS.label}/>
        <FormControlLabel control={
          <Checkbox
            value={EGGS.value}
            onChange={(event, isChecked) => {
              setIsAllergenForEggs(isChecked);
            }}/>} label={EGGS.label}/>
        <FormControlLabel control={
          <Checkbox value={PEANUTS.value}
                    onChange={(event, isChecked) => {
                      setIsAllergenForPeanuts(isChecked);
                    }}/>} label={PEANUTS.label}/>
        <FormControlLabel control={
          <Checkbox value={FISH.value}
                    onChange={(event, isChecked) => {
                      setIsAllergenForFish(isChecked);
                    }}/>} label={FISH.label}/>
        <FormControlLabel control={
          <Checkbox value={WHEAT.value} onChange={(event, isChecked) => {
            setIsAllergenForWheat(isChecked);
          }}/>} label={WHEAT.label}/>
        <FormControlLabel control={
          <Checkbox value={SHELLFISH.value}
                    onChange={(event, isChecked) => {
                      setIsAllergenForShellfish(isChecked);
                    }}/>} label={SHELLFISH.label}/>
        <FormControlLabel control={
          <Checkbox value={SOYBEAN.value}
                    onChange={(event, isChecked) => {
                      setIsAllergenForSoybean(isChecked);
                    }}/>} label={SOYBEAN.label}/>
      </FormGroup>
      <Button
        variant={'contained'}
        onClick={handleSubmit}
      >Add</Button>
    </FormControl>
  </>);
};

export default FoodRecordingPage;
