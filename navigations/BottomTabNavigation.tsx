// import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import {Account,  Cart,  Dashboard} from './StackNavigations';
import { ViewBase ,Animated, TouchableOpacity, Image, Text, View} from 'react-native';
import tailwind from '@tailwind';
import React, {useEffect, useRef} from 'react';
import assets_manifest from '@assets';
import CustomBottomTab from './CustomBottomTab';

const BottomTab = createBottomTabNavigator();

const config = {headerShown: false};

export default function BottomTabNavigation(props: any) {
 
  return (
    <BottomTab.Navigator
      screenOptions={config}
      tabBar={props => <CustomBottomTab {...props} />}
      >
      <BottomTab.Screen name="Home" component={Dashboard} />
      <BottomTab.Screen name="Booking" component={Cart} />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
}
