import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from '../screens/InitialScreen';
import BottomTabNavigation from './BottomTabNavigation';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import MisMatchScreen from '../screens/MisMatchScreen';
import OrderListScreen from '../screens/OrderListScreen';
import SingleOrderScreen from '../screens/SingleOrderScreen';

const RootNavigator = createNativeStackNavigator();

const StackConfig = { headerShown: false };

export default function RootNavigation() {
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
        
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
