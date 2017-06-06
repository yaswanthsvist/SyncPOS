import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import {categoryRow} from "../components/categoryRow";
export default class categoryScreen extends Component {
  static navigatorStyle= {
    drawUnderTabBar: false,
    tabBarHidden: false
  } // override the navigator style for the pushed screen (optional)
  static navigatorButtons = { leftButtons: [ {
    id: 'sideMenu',
    icon:require('./assets/img/menu.png') } ] 
  };
  constructor(props,{store}){
    super(props);
    this.store=store;
    this.state = {showPage: false};
    this.list=[{name:"Bread",id:1},
                {name:"Beverages",id:1},
                {name:"Noodles",id:1},
                {name:"Spices",id:1},
                {name:"Poultry",id:1},
                {name:"Grains",id:1},
                {name:"Personal Care",id:1}
              ];
    this.processCategories();
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }  
  processCategorys(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
        categories: ds.cloneWithRows(this.list),
    };
    console.log(this.state.categories);
  }
  render() {
    console.log("pos render")
    return (
          <ListView dataSource={this.state.categories}
            renderRow={(rowData) =><categoryRow category={rowData}/>}
          />        
    );    // //comment for syntax
  }
  onNavigatorEvent(event) {
    if(event.type=="DeepLink"){
      const parts = event.link.split('/'); // Link parts
      switch(parts[0]){
        case "categories":
             this.props.navigator.switchToTab({
              tabIndex: 2 // (optional) if missing, this screen's tab will become selected
             });
             break;
      }
    }
    switch(event.id) {
      case "sideMenu":
        this.props.navigator.toggleDrawer({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        });
        break;
    }
  }
}
categoryScreen.contextTypes={
  store:React.PropTypes.object
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
