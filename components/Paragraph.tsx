import React from 'react'
import { StyleSheet, Text } from 'react-native'

type Props = {
  children: React.ReactNode
}

const Paragraph = function (props: Props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})

export default Paragraph
