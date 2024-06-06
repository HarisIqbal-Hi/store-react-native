import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const MainLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='home' options={{headerShown:false}}/>
    </Stack>
  )
}

export default MainLayout