import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { DatabaseContextProvider } from "@/database/useDatabase";

const MainLayout = () => {
  return (
    <DatabaseContextProvider>
        <Stack>
          <Stack.Screen name="(create)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    </DatabaseContextProvider>
  );
};

export default MainLayout;
