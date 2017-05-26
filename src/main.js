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
import { StackNavigator } from 'react-navigation';
import tabNavigator from './tab';
import inventoryScreen from './inventory';
import posScreen from './pos';
import {loginScreen} from './login';



const posApp = StackNavigator({
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

AppRegistry.registerComponent('SyncPOS', () => posApp);
