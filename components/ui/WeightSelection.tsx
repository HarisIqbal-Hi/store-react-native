import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import WeightUnitModel from './models/WeightUnitModel'


interface PropsType {
    weightUnit: string
    hanldeUnitValue: (unitValue: string) => void
}

export default function WeightSelection(
    {
        weightUnit,
        hanldeUnitValue

    }: PropsType
) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleModel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View>
            <TouchableOpacity
                    onPress={toggleModel}
                  >
                    <View
                      className={
                        "bg-gray-100 rounded-xl opacity-25 justify-center items-center p-2"
                      }
                    >
                      <Text className="text-center text-white text-base w-6 h-6">{weightUnit}</Text>
                    </View>
                  </TouchableOpacity>

            <WeightUnitModel
                vissile={isOpen}
                onRequestClose={toggleModel}
                itemValue={weightUnit}
                onItemClick={(unit) => {
                    hanldeUnitValue(unit)
                }}
            />
        </View>
    )
}
