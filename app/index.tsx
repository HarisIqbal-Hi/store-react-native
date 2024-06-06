import { View, Text,StatusBar } from 'react-native'
import React from 'react'


const index = () => {
  return (
    <View className={`flex-1 items-center justify-center bg-white`}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar/>
    </View>
  )
}

export default index