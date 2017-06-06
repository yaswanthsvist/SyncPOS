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
import logger from 'redux-logger'
import { Navigation } from 'react-native-navigation';
import {splashScreen} from './splash';
import {loginScreen} from './login';
import inventoryScreen from './inventory';
import posScreen from './pos';
import {sideLeftMenuScreen} from './containers/sideLeftMenu';
import  configureStore  from './configureStore';

import {Provider} from "react-redux";
const store=configureStore();

Navigation.registerComponent('splashScreen', () => splashScreen,store,Provider);
Navigation.registerComponent('loginScreen', () => loginScreen,store,Provider);
Navigation.registerComponent('posScreen', () => posScreen,store,Provider);
Navigation.registerComponent('inventoryScreen', () => inventoryScreen,store,Provider);
Navigation.registerComponent('sideLeftMenuScreen', () => sideLeftMenuScreen,store,Provider);
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
