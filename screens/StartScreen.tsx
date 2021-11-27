import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Background from '../components/Background'
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import Logo from '../components/Logo'
import Paragraph from '../components/Paragraph'
import { StackParamList } from '../navigation/StackNavigator'

type StartScreenProps = StackNavigationProp<StackParamList, 'StartScreen'>

const StartScreen = function () {
  const { navigate } = useNavigation<StartScreenProps>()

  return (
    <Background>
      <Logo />
      <HeaderText>TRIVIA APP</HeaderText>
      <Paragraph>Welcome to the best React Native app</Paragraph>
      <Button mode="outlined">Login</Button>
      <Button onPress={() => navigate('LoginScreen')} mode="contained">
        SignUp
      </Button>
    </Background>
  )
}

export default StartScreen
