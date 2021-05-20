import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-categoty-data';
import { MEALS } from '../data/dummy-meal-data';
import MealItem from '../components/MealItem';

const CatagoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item,
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordibility={itemData.item.affordibility}
      />
    );
  };

  const catId = props.navigation.getParam('catagoryId');
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '95%', paddingVertical: 20 }}
      />
    </View>
  );
};

CatagoryMealScreen.navigationOptions = (props) => {
  const catId = props.navigation.getParam('catagoryId');

  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCatagory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CatagoryMealScreen;
