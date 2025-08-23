import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import tailwind from '@tailwind';
import { Topbar } from '@Component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import assets_manifest from '@assets';
import {
  Logout,
  MyOrderIcon,
  OrderStatusIcon,
  RightIcon,
} from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const log = console.log;

export default function UserProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={tailwind('bg-background h-full')}>
      <Topbar title="Account" type={1} />
      <ScrollView style={tailwind('flex-1 bg-gray-50')}>
        {/* Profile Header */}
        <View style={[tailwind('bg-white rounded-2xl mx-4 mt-16 shadow p-5')]}>
          {/* Profile Image */}
          <View style={{ alignItems: 'center', marginTop: -60 }}>
            <Image
              source={assets_manifest?.LogoNew}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: '#fff',
              }}
            />
          </View>

          {/* Name + Phone */}
          <View style={[tailwind('items-center mt-4')]}>
            <Text style={tailwind('text-xl font-bold text-black')}>
              User Name
            </Text>
            <Text style={tailwind('text-gray-500 mt-1')}>+91 1234567890</Text>
          </View>

          {/* Order Status + My Orders */}
          <View style={tailwind('mt-6')}>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('OrderListScreen');
              }}
              style={[
                tailwind(
                  'flex-row items-center justify-between rounded-xl px-4 py-4 mb-3',
                ),
                {
                  backgroundColor: '#F8F8F8',
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                },
              ]}
            >
              <View style={tailwind('flex-row items-center')}>
                <OrderStatusIcon />
                <Text style={tailwind('ml-3 font-semibold text-black')}>
                  Order Status
                </Text>
              </View>
              <RightIcon />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('OrderListScreen');
              }}
              style={[
                tailwind(
                  'flex-row items-center justify-between rounded-xl px-4 py-4',
                ),
                {
                  backgroundColor: '#F8F8F8',
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                },
              ]}
            >
              <View style={tailwind('flex-row items-center')}>
                <MyOrderIcon />
                {/* <Icon name="shopping-cart" size={20} color="green" /> */}
                <Text style={tailwind('ml-3 font-semibold text-black')}>
                  My Orders
                </Text>
              </View>
              <RightIcon />
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View style={tailwind('mt-6')}>
            <Text style={tailwind('text-gray-600 mb-3')}>Privacy Policy</Text>
            <Text style={tailwind('text-gray-600 mb-3')}>
              Terms & Conditions
            </Text>
            <Text style={tailwind('text-gray-600 mb-3')}>About us</Text>
          </View>

          {/* Logout + Deactivate */}
          <View style={tailwind('mt-6')}>
            <TouchableOpacity style={tailwind('flex-row items-center mb-3')}>
              <Logout />
              <Text style={tailwind('ml-2 text-red-600 font-semibold')}>
                Logout
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={tailwind('flex-row items-center')}>
              <Logout />
              <Text style={tailwind('ml-2 text-red-600 font-semibold')}>
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
