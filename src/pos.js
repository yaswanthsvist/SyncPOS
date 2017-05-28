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
    this.props.navigator.resetTo({
      screen: screen, // unique ID registered with Navigation.registerScreen
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      backButtonHidden: true, // hide the back button altogether (optional)
    });
  }
  constructor(props){
    super(props);
    this.state = {showPage: false};
    this.state.list=["cat","dog"];
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    if(props.loggedIn==false){
      console.log("gotoScreen logout --force");
      this.gotoScreen();
    }    
  }
  onNavigatorEvent(event) {
    if(event.type=="DeepLink"){
      const parts = event.link.split('/'); // Link parts
      switch(parts[0]){
        case "pos":
      //     this.gotoScreen('posScreen');
           this.props.navigator.switchToTab({
            tabIndex: 0 // (optional) if missing, this screen's tab will become selected
           });
            break;
        case "inventory":
     //      this.gotoScreen('inventoryScreen');
           this.props.navigator.switchToTab({
            tabIndex: 1 // (optional) if missing, this screen's tab will become selected
           });
           break;
        case "logout":
           this.gotoScreen('loginScreen');
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
    }
  }
  render() {
  console.log("pos render")
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
