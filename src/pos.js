import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class posScreen extends Component {
/*  static navigationOptions = {
    tabBarLabel: 'POS'
  };
*/
  static navigatorStyle= {
    drawUnderTabBar: false,
    tabBarHidden: false
  } // override the navigator style for the pushed screen (optional)
  static navigatorButtons = { leftButtons: [ {
   id: 'sideMenu',
    icon:require('./assets/img/menu.png') } ] 
  };
  
  logout(screen='loginScreen'){
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'loginScreen', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      }
    });
  }
  constructor(props){
    super(props);
    this.state = {showPage: false};
    this.state.list=["cat","dog"];
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    if(props.loggedIn==false){
      console.log("gotoScreen logout --force");
//      this.gotoScreen();
    }    
  }
  onNavigatorEvent(event) {
    if(event.type=="DeepLink"){
      const parts = event.link.split('/'); // Link parts
      switch(parts[0]){
        case "pos":
           this.props.navigator.switchToTab({
            tabIndex: 0 // (optional) if missing, this screen's tab will become selected
           });
            break;
        case "inventory":
           this.props.navigator.switchToTab({
            tabIndex: 1 // (optional) if missing, this screen's tab will become selected
           });
           break;
        case "logout":
           this.logout('loginScreen');
            break;
      }
    }
    switch(event.id) {
      case 'willAppear':
        break;
      case 'didAppear':
        break;
      case 'willDisappear':
        break;
      case 'didDisappear':
        break;
      case "sideMenu":
        this.props.navigator.toggleDrawer({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        });
        break;
    }
  }
  render() {
  console.log("pos render")
      if(this.props.loggedIn==false){
        return (
          <View/>
          );
      }

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
    backgroundColor:'#E1E2E1'
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
