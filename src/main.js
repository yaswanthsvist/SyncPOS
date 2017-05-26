/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
//import { StackNavigator } from 'react-navigation';
//import tabNavigator from './tab';
import inventoryScreen from './inventory';
import posScreen from './pos';
import {loginScreen} from './login';

Navigation.registerComponent('posScreen', () => posScreen);
Navigation.registerComponent('inventoryScreen', () => inventoryScreen);
Navigation.registerComponent('loginScreen', () => loginScreen);

Navigation.startTabBasedApp({
  tabs: [
    {
      label:'pos',
      screen:'posScreen',
      icon: require('./assets/img/pos.png'),
      selectedIcon: require('./assets/img/pos.png'),
      title:'POS',
      navigatorButtons: {}
    },
    {
      label:'inventory',
      screen:'inventoryScreen',
      icon: require('./assets/img/inventory.png'),
      selectedIcon: require('./assets/img/inventory.png'),
      title:'INVENTORY',
      navigatorButtons: {}
    }
  ],
  tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
    tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: '#551A8B' // optional, change the background color of the tab bar
  },
  appStyle: {
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  }
});

/*const posApp = StackNavigator({
  home: { screen: loginScreen },
  pos: { screen: posScreen },
  inventory: { screen: inventoryScreen },
  tab:{screen:tabNavigator},
}
,{
  headerMode:'none',
  initialRouteName :"home"
}
);

*/
const styles = StyleSheet.create({
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

//AppRegistry.registerComponent('SyncPOS', () => posApp);
