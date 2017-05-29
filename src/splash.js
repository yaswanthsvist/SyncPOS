import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
export class splashScreen extends Component {
  static navigatorStyle = {
    drawUnderNavBar: false,
    tabBarHidden: true,
    navBarHidden: true,
  };
  gotoLogin(){
    this.props.navigator.resetTo({
      screen: "loginScreen", // unique ID registered with Navigation.registerScreen
      title: "Login", // title of the screen as appears in the nav bar (optional)
      passProps: {}, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  }
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
    switch(event.id) {
      case 'willAppear':
       break;
      case 'didAppear':
            setTimeout(
              this.gotoLogin.bind(this)
              ,2000
            );
        break;
      case 'willDisappear':
        break;
      case 'didDisappear':
        break;
    }
  }
  render() {
    console.log("Spalsh render")
    return (
      <View style={styles.container}>
        <View style={styles.appLogo}>  
          <Image style={styles.logo} source={require('./assets/img/posLogo.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor:'#E1E2E1'
  },
  appLogo:{
    flex: 1,
    justifyContent:'center', //vertical way  flex is mandatory
    backgroundColor:'#E1E2E1'
  },
  logo:{
    width:326,
    height:503,
    marginLeft:'auto',
    marginRight:'auto',
  }
});
