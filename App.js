import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  VirtualizedList,
} from 'react-native'
import Header from './src/components/Header'

import Home from './src/screens/Home'

export default function App() {
  StatusBar.setHidden(true)

  return (
    <ScrollView>
      <Header />
      <Home />
    </ScrollView>
  )
}
