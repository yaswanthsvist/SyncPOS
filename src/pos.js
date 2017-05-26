import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class posScreen extends Component {
/*  static navigationOptions = {
    tabBarLabel: 'POS'
  };
*/
  static navigatorStyle= {
    drawUnderTabBar: false,
    tabBarHidden: false
  } // override the navigator style for the pushed screen (optional)
  gotoScreen(screen='loginScreen'){
    this.props.navigator.push({
      screen: screen, // unique ID registered with Navigation.registerScreen
      title: undefined, // navigation bar title of the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      backButtonHidden: true, // hide the back button altogether (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    });
  }
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    if(props.loggedIn!==true){
      this.gotoScreen();
    }    
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to POS
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
