
import React, { useEffect } from "react";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


const MainLayout = () => {

  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="create" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default MainLayout;
