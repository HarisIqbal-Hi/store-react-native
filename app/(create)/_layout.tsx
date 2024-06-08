import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const CreateLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='create-custom' options={{headerShown: false}}/>
        <Stack.Screen name='create-company' options={{headerShown: false}}/>
        <StatusBar backgroundColor='#161612' style='light'/>
      </Stack>
    </>
  )
}

export default CreateLayout