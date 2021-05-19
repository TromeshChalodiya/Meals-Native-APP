import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/color';

const CatagoriesScreen = (props) => {
  const renderGriditem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CatagoryMeals',
            params: {
              catagoryId: itemData.item.id,
            },
          });
        }}
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

CatagoriesScreen.navigationOptions = {
  headerTitle: 'Meal Catagories',
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
