import React from 'react'
import { Modal, Pressable, TouchableOpacity, View,Text } from 'react-native'
import CustomButton from '../CustomButton'


interface PropsType {
    vissile: boolean
    onRequestClose: () => void

    onItemClick: (unit: string) => void

    itemValue: string
}

export default function WeightUnitModel(
    {
        vissile,
        onRequestClose,
        itemValue,
        onItemClick
    }: PropsType
) {
    return (
        <Modal
            animationType="fade"
            transparent
            visible={vissile}
            onRequestClose={onRequestClose}
        >
            <Pressable onPress={onRequestClose}>
                <View className={'h-full bg-black opacity-50 z-1'} />
                <View className={'absolute top-50% left-50% flex-1 justify-center items-center w-full h-full z-10'}>
                    <View className={'bg-primary bg-opacity-20 rounded-lg w-3/4 p-6'}>
                        <Text className={'text-lg color-white font-bold mb-4'}>Select Weight Unit</Text>
                        {['g', 'kg', 'ml', 'l'].map((unit) => (
                            <TouchableOpacity
                                key={unit}
                                onPress={() => onItemClick(unit)}
                                className={'flex flex-row items-center mb-2 bg-primary p-4'}
                            >
                                <View className={'w-4 h-4 mr-2 border border-gray-500 rounded-full justify-center items-center'}>
                                    {String(itemValue) === unit && <View className={'w-2 h-2 bg-secondary rounded-full'} />}
                                </View>
                                <Text className={'text-white'}>{unit}</Text>
                            </TouchableOpacity>
                        ))}
                        <CustomButton
                            containerStyles="mt-5"
                            title={`Select`}
                            handlePress={onRequestClose}
                        />
                    </View>
                </View>

            </Pressable>
        </Modal>
    )
}
