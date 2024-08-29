import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormFild";
import CustomButton from "@/components/ui/CustomButton";
import { icons } from "@/constants";
import CustomFormType, { WeightPriceType } from "@/types/create/CustomFormType";
import { DatabaseContext } from "@/database/useDatabase";
import { BottomSheet, RadioButton } from 'react-native-btr';
import WeightSelection from "@/components/ui/WeightSelection";
import isEmptyString from "@/utils/isEmpty";
import TextError from "@/components/ui/errors/TextError";
import { useLocalSearchParams } from "expo-router";

const CreateCustom = () => {
  const {insertType} = useLocalSearchParams()
  const [createError, setCreateError] = useState({
    hasError: false,
    itemEmptyError: "",
    price$WeightEmptyError: ""
  })

  const { handleInsertCustomData } = useContext(DatabaseContext)

  const [forms, setForms] = useState<CustomFormType>({
    id: undefined,
    itemName: "",
    weightPrice: []
  })
  const [weightPrice, setWeightPrice] = useState<WeightPriceType[]>([{
    id: 0,
    weight: 0,
    price: 0,
    weightUnit: "g"
  }])

  const handleAddInstance = () => {
    setWeightPrice([...weightPrice, { id: undefined, weight: 0, price: 0, weightUnit: "g" }]);
    setForms({ ...forms, weightPrice: weightPrice })
  };

  const handleRemoveInstance = (index: number) => {
    const updatedWeightPrice = [...weightPrice];
    updatedWeightPrice.splice(index, 1);
    setWeightPrice(updatedWeightPrice);
    setForms({ ...forms, weightPrice: updatedWeightPrice })

  };

  const handleChangePrice = (price: number, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].price = price;
    setWeightPrice(updatedWeighPrices);
    setForms({ ...forms, weightPrice: updatedWeighPrices })
  };

  const handleChangeWeight = (weight: number, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].weight = weight;
    setWeightPrice(updatedWeighPrices);
    setForms({ ...forms, weightPrice: updatedWeighPrices })
  };

  const handleChangeWeightUnit = (weightUnit: string, index: number) => {
    console.log(weightUnit, index)
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].weightUnit = weightUnit;
    setWeightPrice(updatedWeighPrices);
    setForms({ ...forms, weightPrice: updatedWeighPrices })
  };

  const handleChangeItemName = (value: string) => {
    setForms({ ...forms, itemName: value });
  };


  const handleAddPress = () => {
    let checkValdation = {
      hasError: false,
      itemEmptyError: "",
      price$WeightEmptyError: ""
    }
    if (isEmptyString(forms.itemName)) {
      checkValdation.hasError = true
      checkValdation.itemEmptyError = "Item name is required"
    } else {
      console.log("no need")
      checkValdation.itemEmptyError = ""
    }

    let priceWeightErrorFound = false;

    for (const element of weightPrice) {
      if (element.price === 0 || element.weight === 0) {
        priceWeightErrorFound = true
        break;
      }
    }
    
    if (priceWeightErrorFound) {  
      checkValdation.hasError = true
      checkValdation.price$WeightEmptyError = "Price and Weight are required"
    } else {
      checkValdation.price$WeightEmptyError = ""
    }

    setCreateError(checkValdation)
    if (checkValdation.hasError) {
      return
    }

    console.log("fine",checkValdation)
    if (insertType === "update") {
      
    } else {
      
    }
    // handleInsertCustomData(forms)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full my-6 px-4 bg-red">
          <Text className="text-white text-4xl">Create Custom</Text>
          <View className="mt-10">
            <FormField
              title={`Item Name`}
              handleChangeText={(e) => { handleChangeItemName(e) }}
              value={forms.itemName}
              error={createError.hasError && !isEmptyString(createError.itemEmptyError)}
              errorText={createError.itemEmptyError}
            />
            <TouchableOpacity
              onPress={handleAddInstance}
              className="mt-5 flex-row  justify-between"
            >
              <View className="flex-1"></View>
              <View
                className={
                  "bg-gray-100 rounded-xl opacity-25 justify-center items-center p-2"
                }
              >
                <Image
                  source={icons.create}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            {weightPrice!.map((weighPriceItem, index) => (
              <View
                className="flex-row justify-between items-center mt-3"
                key={index}
              >
                <FormField
                  otherStyles="flex-1 mx-2"
                  title={`Weight (${weighPriceItem.weightUnit})`}
                  handleChangeText={(text) => handleChangeWeight(Number(text), index)}
                  value={String(weighPriceItem.weight)}
                  keyboardType="numeric"
                />
                <FormField
                  keyboardType="numeric"
                  otherStyles="flex-1 mx-2"
                  title="Price"
                  value={String(weighPriceItem.price)}
                  handleChangeText={(text) => handleChangePrice(Number(text), index)}
                />

                <View className={`gap-2`}>
                  {weightPrice.length > 1 && (
                    <TouchableOpacity
                      onPress={() => { handleRemoveInstance(index) }}
                    >
                      <View
                        className={
                          "bg-gray-100 rounded-xl opacity-25 justify-center items-center p-2"
                        }
                      >
                        <Image
                          source={icons.close}
                          tintColor="white"
                          resizeMode="contain"
                          className="w-6 h-6"
                        />
                      </View>
                    </TouchableOpacity>
                  )}
                  <View>
                    <WeightSelection
                      weightUnit={weighPriceItem.weightUnit}
                      hanldeUnitValue={(unitValue) => handleChangeWeightUnit(unitValue, index)}
                    />
                  </View>
                </View>
              </View>
            ))}
            <TextError hasError={createError.hasError && !isEmptyString(createError.price$WeightEmptyError)} errorText={createError.price$WeightEmptyError} />
            <CustomButton
              containerStyles="mt-7"
              title={`Add`}
              handlePress={handleAddPress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCustom;

