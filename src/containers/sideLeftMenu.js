import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
export class sideLeftMenuScreen extends Component {
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
  gotoScreen(deepLink){
    this.props.navigator.handleDeepLink({
      link: deepLink, // unique ID registered with Navigation.registerScreen
    });
    this.props.navigator.toggleDrawer({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      animated: true, // does the toggle have transition animation or does it happen immediately (optional)
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
          <Button onPress={()=>this.gotoScreen('pos')} title="pos"/>
          <Button onPress={()=>this.gotoScreen('inventory')} title="inventory"/>
          <Button onPress={()=>this.gotoScreen('logout')} title="logout"/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"gold",
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
