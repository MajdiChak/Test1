import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
var { height, width } = Dimensions.get('window')
export default function ProductCard({ item, CategoryId }) {
  return (
    (CategoryId == item.categorie || CategoryId === 0) && (
      <TouchableOpacity style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={{ uri: item.image }}
          resizeMode="contain"
        />

        <Text style={styles.productName}>{item.name}</Text>
        <Text>Desccription Details</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </TouchableOpacity>
    )
  )
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
    width: width / 2 - 20,
  },

  productImage: {
    //width: width / 2 - 20 - 10,
    width: 100,
    height: 100,
  },
  productName: { fontWeight: 'bold', fontSize: 22, textAlign: 'center' },
  productPrice: { fontSize: 20, color: 'green' },
})
