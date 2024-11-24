import { StyleSheet , Image } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';

type Product = {
    name : string,
    image : string,
    price : number,
    id : number
}
const ProductListItem = ({product} : {product : Product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri : product.image}}  style={styles.image}/>
      <Text style={styles.title} >{product.name}</Text>
      <Text style={styles.price} >{product.price}</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10 , 
    borderRadius : 20,
  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    color : Colors.light.tint,
    fontWeight : 'bold',

  }
  ,
});


// Text --> helps render text 
// View --> container similar div
