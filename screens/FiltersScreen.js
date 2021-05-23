import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import MenuDrawer from '../components/MenuDrawer';
import Colors from '../constants/color';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        // trackColor={{
        //   true: Colors.activeSwitch,
        // }}
        thumbColor={Platform.OS === 'android' ? Colors.activeSwitch : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegitarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={(newValue) => setIsVegitarian(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => <MenuDrawer navData={navData} iconName='ios-menu' />,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FiltersScreen;
