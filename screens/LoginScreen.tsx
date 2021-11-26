import { useNavigation } from '@react-navigation/native'
import React from 'react'

import Background from '../components/Background'
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import TextInput from '../components/TextInput'

const LoginScreen = () => {
  const navigation = useNavigation()

  return (
    <Background>
      <HeaderText>Login</HeaderText>
      <TextInput label="Email" autoComplete="djaskjdlaks" mode="outlined" />
      <TextInput label="Password" autoComplete="djaskjdlaks" mode="outlined" />
      <Button mode="contained">Login</Button>
    </Background>
  )
}

export default LoginScreen
