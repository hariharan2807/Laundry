import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import tailwind from '@tailwind';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function InitialScreen() {
  const UserState = useSelector((state: any) => state.app.locationState);
  const navigation = useNavigation();
  return (
    <View style={[tailwind('flex-1 bg-white')]}>
      <View style={[tailwind('justify-center items-center')]}>
        <Image
          style={{ height: '70%', width: '80%' }}
          resizeMode="contain"
          source={require('../../assets/images/SplashLogo.png')}
        />
      </View>
      <View style={[tailwind('py-5 px-3 items-center')]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen', { type: 1 });
          }}
          style={[
            tailwind('px-6 py-3 rounded-2xl bg-primary'),
            { width: '100%' },
          ]}
          activeOpacity={0.8}
        >
          <Text style={tailwind('text-white text-lg text-center font-semi')}>
            Register
          </Text>
        </TouchableOpacity>
        <Image
          style={{ height: 60, width: '80%' }}
          resizeMode="contain"
          source={require('../../assets/images/or.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BluePrintScreen');
            // navigation.navigate('LoginScreen', { type: 2 });
          }}
          style={[
            tailwind('px-6 py-2 rounded-2xl bg-primary'),
            { width: '100%' },
          ]}
          activeOpacity={0.8}
        >
          <Text style={tailwind('text-white text-lg text-center font-semi')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
