import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
export default class inventoryScreen extends Component {
/*  static navigationOptions = {
    tabBarLabel: 'Inventory'  
  }
*/
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Inventory!
        </Text>
      </View>
    );
  }
}
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
