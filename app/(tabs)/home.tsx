import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {

  const RenderItem = () => {
    return (
      <View>

      </View>
    )
  }

  const HeaderCompnent = () => {
    return (
      <View className='px-4 my-6'>
        <Text className='text-white text-4xl'>Home</Text>
      </View>
    )
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[]}
        renderItem={RenderItem}
        ListHeaderComponent={HeaderCompnent}
      />
    </SafeAreaView>
  )
}

export default Home