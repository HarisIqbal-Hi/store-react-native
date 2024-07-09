import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormFild";
import CustomButton from "@/components/ui/CustomButton";
import WeightSelection from "@/components/ui/WeightSelection";
import TextError from "@/components/ui/errors/TextError";

const CreateCompany = () => {
  const [createError, setCreateError] = useState({
    hasError: false,
    companyNameError: "",
    nameError: "",
    priceAndWeighError: ""
  })


  const handleAddPress = () => {
    let checkValdation = {
      hasError: false,
      companyNameError: "",
      nameError: "",
      priceAndWeighError: ""
    }
    
    if (checkValdation.hasError) {
      return
    }

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full h-full my-6 px-4 bg-red">
        <Text className="text-white text-4xl">Create Company</Text>
        <View className="mt-10">
          <FormField
            title="Company Name"
            handleChangeText={(e) => { }}
            value=""
          />
          <FormField
            otherStyles="mt-5"
            title="Name"
            handleChangeText={(e) => { }}
            value=""
          />
          <View className="flex-row justify-between items-center mt-5">
            <FormField
              keyboardType="numeric"
              otherStyles="flex-1 mx-2"
              title="Price"
              handleChangeText={(e) => { }}
              value=""
            />
            <FormField
              otherStyles=" flex-1 mx-2"
              title="Weight (ml)"
              handleChangeText={(e) => { }}
              value=""
              keyboardType="numeric"
            />
            <WeightSelection
              weightUnit={"g"}
              hanldeUnitValue={(unitValue) => { console.log('unit', unitValue) }}
            />
          </View>
          <TextError hasError={false} errorText={"Input Error"} />

          <CustomButton containerStyles="mt-5" title="Add" handlePress={handleAddPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCompany;
