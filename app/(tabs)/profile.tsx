import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='w-full my-6 px-4'>
        <Text className='text-white text-4xl'>Profile</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile