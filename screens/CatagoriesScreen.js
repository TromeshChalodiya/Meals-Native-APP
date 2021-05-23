import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-categoty-data';
import CategoryGridTile from '../components/CategoryGridTile';
import MenuDrawer from '../components/MenuDrawer';

const CatagoriesScreen = (props) => {
  const renderGriditem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CatagoryMeals',
            params: {
              catagoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGriditem}
      numColumns={2}
    />
  );
};

CatagoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Catagories',
    headerLeft: () => <MenuDrawer navData={navData} iconName='ios-menu' />,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CatagoriesScreen;
