export class categoryRow extends Component {
 render(){
  const {name}=this.props.category;
  return(
    <View>
      <Text>
       `{name}`
     </Text>
    </View>
  );
 }
}
