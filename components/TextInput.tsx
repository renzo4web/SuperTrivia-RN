import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput as PaperInput } from 'react-native-paper'

import { theme } from '../core/theme'

type Props = React.ComponentProps<typeof PaperInput> & {
  errText?: string
  description?: string
}

const TextInput = ({ errText, description, mode, ...props }: Props) => {
  const hasDescription = !!description && !errText

  return (
    <View style={styles.container}>
      <PaperInput
        style={styles.container}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode={mode}
        {...props}
      />

      {hasDescription && <Text style={styles.description}>{description}</Text>}

      {!!errText && <Text style={styles.error}>{errText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})

export default TextInput
