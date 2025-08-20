import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import tailwind from '@tailwind';
import { useSelector } from 'react-redux';

export default function InitialScreen() {
  const UserState = useSelector((state: any) => state.app.locationState);

  return (
      <View style={[tailwind('flex-1 justify-center items-center bg-background')]}>
        <Text  style={[tailwind('text-black')]}>{UserState}</Text>
    </View>
  );
}
