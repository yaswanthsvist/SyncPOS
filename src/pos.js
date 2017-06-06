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
import {Product} from "./components/productRow";
export default class posScreen extends Component {
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
    this.list=["book","pen","axe","NATURAL B JAMUN Juice"];
    this.unsubscribe=store.subscribe(this.renderProducts.bind(this))
    this.list.map((product,index)=>{
        store.dispatch({
          type:"ADD_PRODUCT",
          id:index,
          name:product,
          price:30
        })      
    })
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }  
  renderProducts(){
    const dataBlob=[];
    const sectionIds=[];
    const rowIds=[];
    const products=this.store.getState().products;
    for(let i=0;i<products.length;i++){
      rowIds.push(`row:${i}`);
      dataBlob[`row:${i}`]=products[i][0];
    }
    console.log(dataBlob);
//    const getRowData = (dataBlob, ctionId, rowId) => dataBlob[`${rowId}`];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
//      products: ds.cloneWithRows(),
        products: ds.cloneWithRows(products),
    };
    console.log(this.state.products);
    //this.render();
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
    return (
          <ListView dataSource={this.state.products}
            renderRow={(rowData) =><Product product={rowData}/>}
          />
    );
  }
}
posScreen.contextTypes={
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
