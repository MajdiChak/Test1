import React from 'react'
import { Text } from 'react-native'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../utils/style/colors'

export default function CategoryCard({ item, setCategoryId }) {
  return (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => setCategoryId(item.id)}
    >
      <Image style={{ width: 100, height: 80 }} source={{ uri: item.image }} />
      <Text style={styles.categoryTitle}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: colors.light,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: colors.gray,
    borderWidth: 1,
  },

  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
})
