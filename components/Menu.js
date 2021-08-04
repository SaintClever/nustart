import React, { Component } from 'react';
import Animal from './Animal';
import { View } from 'react-native';


class Menu extends Component {
  render() {
    return (
      <View>
        <Animal />
      </View>
    )
  }
}

export default Menu;