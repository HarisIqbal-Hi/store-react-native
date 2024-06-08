import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CreateCard from "@/components/ui/CreateCard";

const Create = () => {
  

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full h-full my-6 px-4 bg-red">
        <Text className="text-white text-4xl">Create</Text>
        <View className="flex-1 justify-center">
          <View className="flex-row">
            <CreateCard
              title="Custom Create"
              handlePress={() => {router.push("/create-custom")}}
            />
            <CreateCard
              title="Company Create"
              handlePress={() => {router.push("/create-company")}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Create;
