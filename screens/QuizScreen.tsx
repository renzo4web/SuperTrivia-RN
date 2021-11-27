import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'

import Background from '../components/Background'
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import TextInput from '../components/TextInput'

const QuizScreen = function () {
  const navigation = useNavigation()

  return (
    <Background>
      <HeaderText>Quiz</HeaderText>
      <TextInput label="Email" autoComplete="djaskjdlaks" mode="outlined" />
      <TextInput label="Password" autoComplete="djaskjdlaks" mode="outlined" />
      <Button mode="contained">Login</Button>
    </Background>
  )
}

export default QuizScreen
