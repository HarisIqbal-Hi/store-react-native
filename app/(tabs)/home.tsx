import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeListCard from '@/components/ui/cards/HomeListCard'

const Home = () => {

  const RenderItem = () => {
    return (
      <View>
        <HomeListCard
          title="Rate List"
          handlePress={() => {}}
        />
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
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={RenderItem}
        ListHeaderComponent={HeaderCompnent}
      />
    </SafeAreaView>
  )
}

export default Home