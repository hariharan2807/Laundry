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

export default function InitialScreen() {
 
  return (
    <View style={{flex: 1}}>
      <View style={[tailwind('flex-1 justify-center items-center bg-black')]}>
        
      </View>
    </View>
  );
}
