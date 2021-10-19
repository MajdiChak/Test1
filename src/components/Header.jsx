import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, View } from 'react-native'
import colors from '../utils/style/colors'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={{
          height: '80%',
          width: '80%',
        }}
        source={{
          uri: 'https://www.foodomarket.com/build/shop/server/images/logo-1.b391bf53.png',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.backgroundDark,
  },
})
