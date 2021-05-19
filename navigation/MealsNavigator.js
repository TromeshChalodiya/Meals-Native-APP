import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMealScreen from '../screens/CatagoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/color';

const MealsNavigator = createStackNavigator(
  {
    Catagories: {
      screen: CatagoriesScreen,
    },
    CatagoryMeals: {
      screen: CatagoryMealScreen,
    },
    MealDetails: MealDetailScreen,
  },
  {
    // initialRouteKey: 'MealDetails',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? Colors.primary : '#ff7b54',
      },
      headerTintColor: 'white',
    },
  }
);

export default createAppContainer(MealsNavigator);
