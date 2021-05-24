import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-categoty-data';
import MealList from '../components/MealList';

const CatagoryMealScreen = (props) => {
  const catId = props.navigation.getParam('catagoryId');

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, maybe check your filters!</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CatagoryMealScreen.navigationOptions = (props) => {
  const catId = props.navigation.getParam('catagoryId');

  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCatagory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CatagoryMealScreen;
