export class Product extends Component {
 render(){
  const {name,price}=this.props.product;
  return(
    <View>
      <Text>
       `Product:{name} Price:{price}`
     </Text>
    </View>
  );
 }
}

