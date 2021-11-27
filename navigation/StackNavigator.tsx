import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import QuizScreen from '../screens/QuizScreen'
import StartScreen from '../screens/StartScreen'
import { Routes } from './routes'

export type StackParamList = {
  QuizScreen: undefined
  StartScreen: undefined
}

const Stack = createStackNavigator<StackParamList>()

const StackNavigator = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.StartScreen} component={StartScreen} />
      <Stack.Screen name={Routes.QuizScreen} component={QuizScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator
