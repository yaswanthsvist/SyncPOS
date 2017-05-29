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
import { applyMiddleware, createStore } from 'redux';
//import logger from 'redux-logger'
/*const store = createStore(
  reducer,
  applyMiddleware(logger)
)
*/ 
import { Navigation } from 'react-native-navigation';
import {splashScreen} from './splash';
import {loginScreen} from './login';
import inventoryScreen from './inventory';
import posScreen from './pos';
import {sideLeftMenuScreen} from './containers/sideLeftMenu';

Navigation.registerComponent('splashScreen', () => splashScreen);
Navigation.registerComponent('loginScreen', () => loginScreen);
Navigation.registerComponent('posScreen', () => posScreen);
Navigation.registerComponent('inventoryScreen', () => inventoryScreen);
Navigation.registerComponent('sideLeftMenuScreen', () => sideLeftMenuScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'splashScreen', // unique ID registered with Navigation.registerScreen
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});

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
