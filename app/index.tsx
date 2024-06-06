import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl color-red">Welcome</Text>
      <Link href={"/home"} style={{color:"blue"}}>Go to Profile</Link>
    </View>
  )
}

export default Welcome