import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InitialScreen from '../screens/InitialScreen';
import BottomTabNavigation from './BottomTabNavigation';


const RootNavigator = createNativeStackNavigator();

const StackConfig = {headerShown: false};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator
        initialRouteName="BottomTabNavigation"
        screenOptions={StackConfig}>
        {/* <RootNavigator.Screen component={InitialScreen} name="InitialScreen" /> */}

        <RootNavigator.Screen
          component={BottomTabNavigation}
          name="BottomTabNavigation"
        />
      
       
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
