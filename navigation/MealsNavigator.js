import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMealScreen from '../screens/CatagoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteMeal';
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
    // mode: 'modal',
    // initialRouteKey: 'MealDetails',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : '#02475e',
      },
      headerTintColor: Platform.OS === 'ios' ? '#511281' : 'white',
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.activeTab,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
