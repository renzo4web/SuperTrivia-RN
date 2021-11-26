import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Paragraph } from 'react-native-paper'
import Background from '../components/Background'

import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import Logo from '../components/Logo'
import { StackParamList } from '../navigation/StackNavigator'

type StartScreenProps = StackNavigationProp<StackParamList, 'StartScreen'>

const StartScreen = () => {
  const navigation = useNavigation<StartScreenProps>()

  return (
    <Background>
      <Logo />
      <HeaderText>PEPEGA</HeaderText>
      <Paragraph>Welcome to the best React Native app</Paragraph>
      <Button mode="outlined">Login</Button>
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        mode="contained"
      >
        SignUp
      </Button>
    </Background>
  )
}

export default StartScreen
