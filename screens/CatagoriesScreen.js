import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-categoty-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

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
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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
