import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => {
  return (
    <Image
      source={require('../assets/pngaaa.com-2451519.png')}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
})

export default Logo
