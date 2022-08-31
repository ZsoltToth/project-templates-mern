import React from 'react';
import Food from '../types/Food';
import { Box, ImageList, ImageListItem, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { AllergenSpec } from '../types/Allergen';
import { Image } from '@material-ui/icons';

interface FoodListProps {
  foods : Food[]
}

const printAllergenList = (allergens : AllergenSpec[]) : string => {
  if (!allergens) {
    return '-';
  }
  return allergens.reduce((acc, cur) => `${acc} ${cur.label}`, '');
};

const FoodList : React.FunctionComponent<FoodListProps> = ({ foods }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Allergens</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {foods.map((food) => {
          return (
            <TableRow key={uuidv4()}>
              <TableCell>
                <img width={200} height={200} src={food.image}/>
              </TableCell>
              <TableCell>{food.name}</TableCell>
              <TableCell>{printAllergenList(food.allergens)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      </Table>
  );
};

export default FoodList;
