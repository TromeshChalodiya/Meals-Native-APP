import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/color';

const CatagoryMealScreen = (props) => {
  const catId = props.navigation.getParam('catagoryId');

  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Catagory Meal Screen!</Text>
      <Text>{selectedCatagory.title}</Text>
      <Button
        title='Meal Details!'
        onPress={() => {
          props.navigation.navigate('MealDetails');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.pop();
        }}
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
