import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormFild";
import CustomButton from "@/components/ui/CustomButton";
import { icons } from "@/constants";
import CustomFormType, { WeightPriceType } from "@/types/create/CustomFormType";
import { DatabaseContext } from "@/database/useDatabase";

const CreateCustom = () => {
  const {states, handleInsertCustomData} = useContext(DatabaseContext)
  const [forms, setForms] = useState<CustomFormType>({
    id: undefined,
    itemName: "",
    weightPrice: []
  })
  const [weightPrice, setWeightPrice] = useState<WeightPriceType[]> ([{
    id: 0,
    weight: 0,
    price: 0,
    weightUnit: "g"
  }])


  const handleAddInstance = () => {
    setWeightPrice([...weightPrice, { id: undefined,weight: 0, price: 0,weightUnit: "g" }]);
    setForms({...forms,weightPrice:weightPrice})
  };

  const handleRemoveInstance = (index: number) => {
    const updatedWeightPrice = [...weightPrice];
    updatedWeightPrice.splice(index, 1);
    setWeightPrice(updatedWeightPrice);
    setForms({...forms,weightPrice:updatedWeightPrice})
    
  };

  const handleChangePrice = (price: number, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].price = price;
    setWeightPrice(updatedWeighPrices);
    setForms({...forms,weightPrice:updatedWeighPrices})
  };

  const handleChangeWeight = (weight: number, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].weight = weight;
    setWeightPrice(updatedWeighPrices);
    setForms({...forms,weightPrice:updatedWeighPrices})
  };

  const handleChangeWeightUnit = (weightUnit: string, index: number) => {
    const updatedWeighPrices = [...weightPrice];
    updatedWeighPrices[index].weightUnit = weightUnit;
    setWeightPrice(updatedWeighPrices);
    setForms({...forms,weightPrice:updatedWeighPrices})
  };

  const handleChangeItemName = (value: string) => {
    setForms({...forms, itemName: value});
  };


  const handleAddPress = () => {
    handleInsertCustomData(forms)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full my-6 px-4 bg-red">
          <Text className="text-white text-4xl">Create Custom</Text>
          <View className="mt-10">
            <FormField
              title="Item Name"
              handleChangeText={(e) => {handleChangeItemName(e)}}
              value={forms.itemName}
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
                  otherStyles="flex-1 mx-2"
                  title={`Weight (${weighPrice.weightUnit})`}
                  handleChangeText={(text) => handleChangeWeight(Number(text), index)}
                  value={String(weighPrice.weight)}
                  keyboardType="numeric"
                />
                <FormField
                  keyboardType="numeric"
                  otherStyles="flex-1 mx-2"
                  title="Price"
                  value={String(weighPrice.price)}
                  handleChangeText={(text) => handleChangePrice(Number(text), index)}
                />
                <FormField
                  keyboardType="numeric"
                  otherStyles="flex-1 mx-2"
                  title="Unit"
                  value={weighPrice.weightUnit}
                  handleChangeText={(text) => handleChangeWeightUnit(text, index)}
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
              handlePress={handleAddPress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCustom;
