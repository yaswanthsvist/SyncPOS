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
        <View style={styles.sideMenuLogo}>
          <Text style={styles.instructions}>
            
          </Text>
        </View>
        <View style={styles.menuOptions}>
          <View style={styles.menuOption}>
            <Button  onPress={()=>this.gotoScreen('pos')} title="pos"/>
          </View>
          <View style={styles.menuOption}>
            <Button onPress={()=>this.gotoScreen('inventory')} title="inventory"/>
          </View>
          <View style={styles.menuOption}>
            <Button onPress={()=>this.gotoScreen('logout')} title="logout"/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuLogo: {
    flex: 3,
    backgroundColor:'#3d5afe' //secondary
  },
  container: {
    flex: 1,
    width:300,
  },
  menuOption:{
    marginTop:20,
    backgroundColor:'#F5F5F6'
  },
  menuOptions: {
    flex:8,
    backgroundColor:"#F5F5F6",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
