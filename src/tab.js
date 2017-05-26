import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
 } from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class posTabScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'POS',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/img/pos.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('pos')}
        title="POS"
      />
    );
  }
}

class inventoryTabScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'INVENTORY',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/img/inventory.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('inventory')}
        title="INVENTORY"
      />
    );
  }
}

export const tabNavigator = TabNavigator({
  pos: { screen: posTabScreen },
  inventory: { screen: inventoryTabScreen },
 },{
  tabBarPosition :"bottom",
  tabBarOptions: {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
 }
});
tabNavigator.navigationOptions = {
  title: 'TABS',
};

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
  },
  loginButtonView: {
    flex:1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
