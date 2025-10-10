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
  // const rnBiometrics = new ReactNativeBiometrics()

  const rnBiometrics = new ReactNativeBiometrics();

  const checkBiometricAvailability = () => {
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const { available, biometryType } = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID supported');
        authenticateUser();
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID supported');
        authenticateUser();
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log('Biometrics supported');
        authenticateUser();
      } else {
        Alert.alert('Biometric not supported on this device');
      }
    });
  };

  const authenticateUser = () => {
    rnBiometrics
      .simplePrompt({ promptMessage: 'Confirm your identity' })
      .then(result => {
        const { success } = result;

        if (success) {
          console.log('Biometric authentication successful!');
          // 👉 Navigate to another screen
          navigation.replace('HomeScreen'); // or navigation.navigate('HomeScreen')
        } else {
          Alert.alert('Authentication cancelled');
        }
      })
      .catch(() => {
        Alert.alert('Biometric authentication failed');
      });
  };
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
        <View
          style={[
            tailwind('flex-row mb-3 items-center'),
            { justifyContent: 'space-between' },
          ]}
        >
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('BluePrintScreen');
              // navigation.navigate('LoginScreen', { type: 2 });
            }}
            style={[tailwind(' py-2 rounded-2xl bg-primary'), { width: '45%' }]}
            activeOpacity={0.8}
          >
            <Text style={tailwind('text-white text-lg text-center font-semi')}>
              LineGrah
            </Text>
          </TouchableOpacity> */}
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
        </View>

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
            // navigation.navigate('BluePrintScreen');
            navigation.navigate('LoginScreen', { type: 2 });
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
