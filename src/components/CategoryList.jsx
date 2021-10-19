import React from 'react'
import { FlatList, Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import CategoryCard from './CategoryCard'
import Data from '../datas/Data'
import colors from '../utils/style/colors'

export default function CategoryList({ setCategoryId }) {
  return (
    <View>
      <Text style={styles.CategoryTitle}>Nos rayons</Text>
      <FlatList
        horizontal={true}
        data={Data.categories}
        renderItem={({ item }) => (
          <CategoryCard item={item} setCategoryId={setCategoryId} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  CategoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: colors.light,
    borderBottomWidth: 1,
  },
})
