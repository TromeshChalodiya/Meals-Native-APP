import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CatagoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Catagory Meal Screen!</Text>
      <Button
        title='Meal Details!'
        onPress={() => {
          props.navigation.navigate('MealDetails');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CatagoryMealScreen;
