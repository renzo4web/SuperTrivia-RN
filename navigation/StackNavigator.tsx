import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import StartScreen from '../screens/StartScreen'

export type StackParamList = {
  LoginScreen: undefined
  StartScreen: undefined
}

const Stack = createStackNavigator<StackParamList>()

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </>
  )
}

export default StackNavigator
