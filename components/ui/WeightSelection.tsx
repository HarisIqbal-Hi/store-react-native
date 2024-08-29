import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
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
        <>
            <TouchableOpacity
                    onPress={toggleModel}
                  >
                    <View
                    // style={styles.unitButton}
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
        </>
    )
}


const styles = StyleSheet.create({
  unitButton : {
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding:2,

  }
})
