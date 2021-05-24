import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../redux-store/actions/meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  // Not an ideal solution as useEffect trigger after the component is render
  // and that is creating a delay while loading headerTitle
  // useEffect(() => {
  //   props.navigation.setParams({ mealTitle: selectedMeal.title });
  // }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordibility.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');

  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  debugger;
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={toggleFavorite} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
