import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
export class loginScreen extends Component {
  static navigatorStyle = {
    drawUnderNavBar: false,
    tabBarHidden: true,
    navBarHidden: true,
  };
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
    switch(event.id) {
      case 'willAppear':
       break;
      case 'didAppear':
        break;
      case 'willDisappear':
        break;
      case 'didDisappear':
        break;
    }
  }
  componentWillUnmount(){
  }
  gotoPosScreen(){
    this.props.navigator.push({
      screen: 'posScreen', // unique ID registered with Navigation.registerScreen
      title: "POS", // navigation bar title of the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      passProps:{loggedIn:true},
      backButtonHidden: true, // hide the back button altogether (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:5}}>
          <Text style={styles.instructions}>
            Welcome to SyncPOS!
          </Text>
        </View>
        <View style={styles.loginButtonView}>
          <Button onPress={()=>this.gotoPosScreen()} title="login"/>
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
    flex:5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
