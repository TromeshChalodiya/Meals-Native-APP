import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from './HeaderButton';

const MenuDrawer = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName={props.iconName}
        onPress={() => {
          props.navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default MenuDrawer;
