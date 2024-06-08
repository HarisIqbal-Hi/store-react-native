import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormFild";
import CustomButton from "@/components/ui/CustomButton";

const CreateCompany = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full h-full my-6 px-4 bg-red">
        <Text className="text-white text-4xl">Create Company</Text>
        <View className="mt-10">
          <FormField
            title="Company Name"
            handleChangeText={(e) => {}}
            value=""
          />
          <FormField
            otherStyles="mt-7"
            title="Name"
            handleChangeText={(e) => {}}
            value=""
          />
          <View className="flex-row justify-between">
            <FormField
              keyboardType="numeric"
              otherStyles="mt-7 flex-1 mx-2"
              title="Price"
              handleChangeText={(e) => {}}
              value=""
            />
            <FormField
              otherStyles="mt-7 flex-1 mx-2"
              title="Weight (ml)"
              handleChangeText={(e) => {}}
              value=""
              keyboardType="numeric"
            />
          </View>

          <CustomButton containerStyles="mt-7" title="Submit" handlePress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCompany;
