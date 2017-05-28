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
  static navigatorButtons = { leftButtons: [ {
    id: 'sideMenu',
    icon:require('./assets/img/sideMenu.png') } ] 
  };
 gotoScreen(screen='loginScreen'){
    this.props.navigator.resetTo({
      screen: screen, // unique ID registered with Navigation.registerScreen
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      backButtonHidden: true, // hide the back button altogether (optional)
    });
  }
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
    if(event.type=="DeepLink"){
      const parts = event.link.split('/'); // Link parts
      switch(parts[0]){
        case "pos":
           console.log("deeplink 'pos' in inventory");
           this.props.navigator.switchToTab({
            tabIndex: 0 // (optional) if missing, this screen's tab will become selected
           });
            break;
        case "inventory":
           console.log("deeplink 'inventory' in inventory");
           this.props.navigator.switchToTab({
            tabIndex: 1 // (optional) if missing, this screen's tab will become selected
           });
           break;
        case "logout":
           console.log("deeplink 'logout' in inventory");
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
      case "sideMenu":
        this.props.navigator.toggleDrawer({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        });
        break;
    }
  }
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
