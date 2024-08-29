import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CreateCard from "@/components/ui/CreateCard";

const Create = () => {


  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className="w-full h-full my-6 px-4 bg-red">
        <Text className="text-white text-4xl">Create</Text>
        <View className="mt-10 flex">
          <CreateCard
            title="Custom Create"
            handlePress={() => { router.push("/create/create-custom?insertType=update") }}
          />
          <View className="mt-5" />
          <CreateCard
            title="Company Create"
            handlePress={() => { router.push("/create/create-company") }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Create;
