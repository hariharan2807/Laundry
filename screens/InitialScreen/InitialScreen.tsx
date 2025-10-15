import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import tailwind from '@tailwind';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

export default function InitialScreen() {
  const UserState = useSelector((state: any) => state.app.locationState);
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen', params: { type: 2, Forget: false } }],
      });
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);
  
  // const rnBiometrics = new ReactNativeBiometrics()

  // const rnBiometrics = new ReactNativeBiometrics();
  // useEffect(() => {
  //   checkBiometricAvailability();
  // }, []);
  // const checkBiometricAvailability = async () => {
  //   try {
  //     const { available, biometryType } =
  //       await rnBiometrics.isSensorAvailable();

  //     if (available) {
  //       console.log(`Biometric available: ${biometryType}`);
  //       authenticateUser();
  //     } else {
  //       Alert.alert('Biometric not supported on this device');
  //     }
  //   } catch (error) {
  //     Alert.alert('Error checking biometric availability', error.message);
  //   }
  // };

  // const authenticateUser = async () => {
  //   try {
  //     const { success } = await rnBiometrics.simplePrompt({
  //       promptMessage: 'Confirm your identity',
  //     });

  //     if (success) {
  //       console.log('Biometric authentication successful!');
  //       navigation.replace('HomeScreen'); // or navigate
  //     } else {
  //       Alert.alert('Authentication cancelled');
  //     }
  //   } catch (error) {
  //     Alert.alert('Biometric authentication failed', error.message);
  //   }
  // };
  return (
    <View style={[tailwind('flex-1 bg-white')]}>
      <View style={[tailwind('justify-center items-center')]}>
        <Image
          style={{ height: '100%', width: '80%' }}
          resizeMode="contain"
          source={require('../../assets/images/SplashLogo.png')}
        />
      </View>
      <View style={[tailwind('py-5 px-3 items-center')]}>
        {/* <View
          style={[
            tailwind('flex-row mb-3 items-center'),
            { justifyContent: 'space-between' },
          ]}
        >
          
          <View style={[tailwind('ml-2 mr-2')]} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BluePrintScreenlineChat');
              // navigation.navigate('LoginScreen', { type: 2 });
            }}
            style={[tailwind('py-2 rounded-2xl bg-primary'), { width: '100%' }]}
            activeOpacity={0.8}
          >
            <Text style={tailwind('text-white text-lg text-center font-semi')}>
              Chat Graph
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen', { type: 1, Forget: false });
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
            // navigation.navigate('BluePrintScreen');
            navigation.navigate('LoginScreen', { type: 2, Forget: false });
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
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
