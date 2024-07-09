import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";

interface FormFieldTypeG {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: any) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
  error?: boolean;
  errorText?: string;
}

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  keyboardType,
  error,
  errorText
}: FormFieldTypeG) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="flex flex-column">
        <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
          <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor="#7B7B8B"
            onChangeText={handleChangeText}
          />
        </View>
        {
          true &&
          <Text className="text-base text-error-100 font-psemibold mt-1">{errorText}</Text>
        }
      </View>
    </View>
  );
};

export default FormField;
