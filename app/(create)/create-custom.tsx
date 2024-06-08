import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormFild";
import CustomButton from "@/components/ui/CustomButton";
import { icons } from "@/constants";
import CustomFormType, { WeightPriceType } from "../types/create/CustomFormType";

const CreateCustom = () => {
  const [form, setForm] = useState<CustomFormType>()
  const [weightPrice, setWeightPrice] = useState<WeightPriceType[]> ([{
    weight: 0,
    price: 0
  }])


  const handleAddInstance = () => {
    setWeightPrice([...weightPrice, { weight: 0, price: 0 }]);
  };

  const handleRemoveInstance = (index: number) => {
    const updatedWeightPrice = [...weightPrice];
    updatedWeightPrice.splice(index, 1);
    setWeightPrice(updatedWeightPrice);
  };

  const handleChangePrice = (price: number, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].price = price;
    setWeightPrice(updatedWeighPrices);
  };

  const handleChangeWeight = (weight: number, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].weight = weight;
    setWeightPrice(updatedWeighPrices);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full my-6 px-4 bg-red">
          <Text className="text-white text-4xl">Create Custom</Text>
          <View className="mt-10">
            <FormField
              title="Item Name"
              handleChangeText={(e) => {}}
              value=""
            />
            <TouchableOpacity
              onPress={handleAddInstance}
              className="mt-7 flex-row  justify-between"
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
            {weightPrice!.map((weighPrice, index) => (
              <View
                className="flex-row justify-between items-center"
                key={index}
              >
                 <FormField
                  otherStyles="mt-3 flex-1 mx-2"
                  title="Weight (g)"
                  handleChangeText={(text) => handleChangeWeight(Number(text), index)}
                  value={String(weighPrice.weight)}
                  keyboardType="numeric"
                />
                <FormField
                  keyboardType="numeric"
                  otherStyles="mt-3 flex-1 mx-2"
                  title="Price"
                  value={String(weighPrice.price)}
                  handleChangeText={(text) => handleChangePrice(Number(text), index)}
                />
               
                {weightPrice.length > 1 && (
                  <TouchableOpacity
                    onPress={() => {handleRemoveInstance(index)}}
                    className="mt-7"
                  >
                    <View
                      className={
                        "bg-gray-100 rounded-xl opacity-25 justify-center items-center p-2"
                      }
                    >
                      <Image
                        source={icons.close}
                        resizeMode="contain"
                        className="w-6 h-6"
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            ))}

            <CustomButton
              containerStyles="mt-7"
              title={`Add`}
              handlePress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCustom;
