import React from 'react';

import MealList from '../components/MealList';
import MenuDrawer from '../components/MenuDrawer';
import { MEALS } from '../data/dummy-meal-data';

const FavoriteScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <MenuDrawer navData={navData} iconName='ios-menu' />,
  };
};

export default FavoriteScreen;
