import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export class loginScreen extends Component {
  static navigationOptions = {
    title: 'Login' 
  }
  render() {
    let {navigate}=this.props.navigation
    return (
      <View style={styles.container}>
        <View style={{flex:10}}>
          <Text style={styles.instructions}>
            Welcome to React Nativedddddddddddddd!
          </Text>
        </View>
        <View style={styles.loginButtonView}>
          <Button onPress={() => navigate('tab')} title="login"/>
        </View>
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
