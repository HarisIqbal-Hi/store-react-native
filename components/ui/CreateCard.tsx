import { View, Text, TouchableOpacity, Image } from 'react-native'
import { icons } from '@/constants'

const CreateCard = ({ title,handlePress}: { title: string, handlePress: () => void }) => {
    return (
      <TouchableOpacity onPress={handlePress} >
      {/* <TouchableOpacity onPress={handlePress} className="flex-1 mx-2"> */}
        <View className="bg-gray-800 bg-opacity-50 rounded-lg p-4 items-center gap-2">
          <Image
            source={icons.create}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Text className="text-white text-1xl">{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

export default CreateCard