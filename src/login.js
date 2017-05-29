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
  openMainApp(){
    Navigation.startTabBasedApp({
      tabs: [
        {
          label:'pos',
          screen:'posScreen',
          icon: require('./assets/img/pos.png'),
          selectedIcon: require('./assets/img/pos.png'),
          title:'POS',
        },
        {
          label:'inventory',
          screen:'inventoryScreen',
          icon: require('./assets/img/inventory.png'),
          selectedIcon: require('./assets/img/inventory.png'),
          title:'INVENTORY',
        }
      ],
      tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
        tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected)
        tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected)
        tabBarBackgroundColor: '#551A8B' // optional, change the background color of the tab bar
      },
      appStyle: {
        orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
      },
      drawer:{
        left:{
          screen:"sideLeftMenuScreen",
          passProps:{}
        },
      }
    });
  }

  onLogin(){
    this.openMainApp();
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
    console.log("gotoPosScreen");
    this.props.navigator.resetTo({
      screen: 'posScreen', // unique ID registered with Navigation.registerScreen
      title: "POS", // navigation bar title of the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      passProps:{loggedIn:true},
    });
  }
  render() {
  console.log("login render")
    return (
      <View style={styles.container}>
        <View style={{flex:5}}>
          <Text style={styles.instructions}>
            Welcome to SyncPOS!
          </Text>
        </View>
        <View style={styles.loginButtonView}>
          <Button onPress={()=>this.onLogin()} title="login"/>
        </View>
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
    flex:5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
