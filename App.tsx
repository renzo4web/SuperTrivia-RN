import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { theme } from './core/theme'
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  )
}
