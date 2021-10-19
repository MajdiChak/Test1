import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, ScrollView, Text } from 'react-native'

import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'

export default function Home() {
  const [CategoryId, setCategoryId] = useState(0)

  return (
    <View style={styles.homeContainer}>
      <CategoryList setCategoryId={setCategoryId} />
      <ProductList CategoryId={CategoryId} />
      <View style={{ height: 50 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingVertical: 10,
  },
})
