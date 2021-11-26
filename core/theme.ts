import { DefaultTheme } from 'react-native-paper'

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      // replace by your own color names
      tint: string
      google: string
    }
  }
}

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#121330',
    tint: '#FCFCFD',
    secondary: '#414757',
    border: '#C9DDEC',
    error: '#F13A59',
    success: '#00B386',
    google: '#2E7D32',
  },
}
