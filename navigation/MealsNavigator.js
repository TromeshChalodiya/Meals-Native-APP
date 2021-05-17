import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMealScreen from '../screens/CatagoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Catagories: CatagoriesScreen,
  CatagoryMeals: {
    screen: CatagoryMealScreen,
  },
  MealDetails: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
