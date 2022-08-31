import React, { useEffect, useState } from 'react';
import Food from '../types/Food';
import { fetchFoods } from '../action/FoodActions';
import FoodList from '../component/FoodList';

const FoodListPage : React.FunctionComponent = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetchFoods().then((data) => { setFoods(data); });
  }, []);

  return (<FoodList foods={foods}/>);
};

export default FoodListPage;
