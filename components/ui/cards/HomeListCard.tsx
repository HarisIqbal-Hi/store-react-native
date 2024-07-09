import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface PropsType {
    title: string
    handlePress: () => void
}

export default function HomeListCard(
    {
        title,
        handlePress
    }: PropsType
) {
    return (
        <TouchableOpacity onPress={handlePress} className="flex-1">
            <View className="bg-gray-800 bg-opacity-50 rounded-lg p-4 items-center gap-2">
                <Text className="text-white text-1xl">{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
