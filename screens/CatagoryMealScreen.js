import React from 'react';

import { CATEGORIES } from '../data/dummy-categoty-data';
import { MEALS } from '../data/dummy-meal-data';
import MealList from '../components/MealList';

const CatagoryMealScreen = (props) => {
  const catId = props.navigation.getParam('catagoryId');
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CatagoryMealScreen.navigationOptions = (props) => {
  const catId = props.navigation.getParam('catagoryId');

  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCatagory.title,
  };
};

export default CatagoryMealScreen;
