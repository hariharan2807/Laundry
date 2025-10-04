import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import tailwind from '@tailwind';
export const ButtonComponent = (props: any) => {
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size: number) => (width / 375) * size;
  return (
    <TouchableOpacity
      onPress={() => {
        props?.navigation.navigate(props?.naviagte);
      }}
      style={[
        tailwind('px-6 py-3 mt-6 rounded-2xl bg-primary'),
        { width: width * 0.94 }, 
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[
          tailwind('text-white text-center font-semi'),
          { fontSize: scaleFont(16) },
        ]}
      >
        Mismatch Items
      </Text>
    </TouchableOpacity>
  );
};
