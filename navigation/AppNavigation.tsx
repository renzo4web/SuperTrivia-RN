import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'

const AppNavigation = function () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
