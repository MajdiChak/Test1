import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import ProductCard from './ProductCard'
import Data from '../datas/Data'
var { height, width } = Dimensions.get('window')
export default function ProductList({ CategoryId }) {
  return (
    <View>
      <FlatList
        //horizontal={true}
        data={Data.products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard item={item} CategoryId={CategoryId} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
})
