import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

import InitialScreen from '../screens/InitialScreen';
import BottomTabNavigation from './BottomTabNavigation';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import MisMatchScreen from '../screens/MisMatchScreen';
import OrderListScreen from '../screens/OrderListScreen';
import SingleOrderScreen from '../screens/SingleOrderScreen';
import SearchScreen from '../screens/SearchScreen';
import BluePrintScreen from '../screens/BluePrintScreen1';
import BluePrintScreenlineChat from '../screens/BluePrintScreen';
import { Alert, BackHandler } from 'react-native';
import OrderSuccessFailScreen from '../screens/OrderSuccessFailScreen';

const RootNavigator = createNativeStackNavigator();

const StackConfig = { headerShown: false };
// const rnBiometrics = new ReactNativeBiometrics();

export default function RootNavigation() {
  // const rnBiometrics = new ReactNativeBiometrics();

  // const rnBiometrics = new ReactNativeBiometrics();

  // useEffect(() => {
  //   const checkBiometrics = async () => {
  //     try {
  //       const { available, biometryType } = await rnBiometrics.isSensorAvailable();

  //       if (available) {
  //         console.log(`Biometric available: ${biometryType}`);
  //         authenticateUser();
  //       } else {
  //         Alert.alert('Biometric not supported on this device');
  //       }
  //     } catch (error) {
  //       Alert.alert('Error checking biometric availability', error.message);
  //     }
  //   };

  //   const authenticateUser = async () => {
  //     try {
  //       const { success } = await rnBiometrics.simplePrompt({
  //         promptMessage: 'Confirm your identity',
  //       });

  //       if (success) {
  //         console.log('Biometric authentication successful!');
  //         // Navigate to Home or main screen
  //         navigationRef.current?.reset({
  //           index: 0,
  //           routes: [{ name: 'BottomTabNavigation' }],
  //         });
  //       } else {
  //         Alert.alert(
  //           'Authentication cancelled',
  //           'App will close now',
  //           [
  //             {
  //               text: 'OK',
  //               onPress: () => BackHandler.exitApp(), // closes app
  //             },
  //           ],
  //           { cancelable: false }
  //         );          
  //       }
  //     } catch (error) {
  //       Alert.alert('Biometric authentication failed', error.message);
  //     }
  //   };

  //   checkBiometrics();
  // }, []);
  // const navigationRef = React.useRef();

  return (
    <NavigationContainer>
      <RootNavigator.Navigator
        initialRouteName="InitialScreen"
        screenOptions={StackConfig}
      >
        <RootNavigator.Screen component={InitialScreen} name="InitialScreen" />

        <RootNavigator.Screen
          component={BottomTabNavigation}
          name="BottomTabNavigation"
        />
        <RootNavigator.Screen component={LoginScreen} name="LoginScreen" />

        <RootNavigator.Screen
          component={PasswordScreen}
          name="PasswordScreen"
        />
        <RootNavigator.Screen
          component={MisMatchScreen}
          name="MisMatchScreen"
        />
        <RootNavigator.Screen
          component={OrderListScreen}
          name="OrderListScreen"
        />
        <RootNavigator.Screen
          component={SingleOrderScreen}
          name="SingleOrderScreen"
        />
        <RootNavigator.Screen
          component={BluePrintScreenlineChat}
          name="BluePrintScreenlineChat"
        />
        <RootNavigator.Screen
          component={OrderSuccessFailScreen}
          name="OrderSuccessFailScreen"
        />
        
        <RootNavigator.Screen component={SearchScreen} name="SearchScreen" />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
