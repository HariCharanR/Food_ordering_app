import { StyleSheet , Image } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '../../../assets/data/products';

const product = products[0];



export default function TabOneScreen() {
  return (
    <ProductListItem product={products[0]} />
  );
}

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
