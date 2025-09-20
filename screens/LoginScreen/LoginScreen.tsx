import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import tailwind from '@tailwind';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, useRoute } from '@react-navigation/native';
import Topbar from '../../Component/TopBar';

export default function LoginScreen() {
  const [mobileno, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [user_id, setUser_id] = useState('');
  const [pass, setPass] = useState('');
  const TypeData = 1;
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={[tailwind('h-full')]}>
      <Topbar
        title={route?.params?.type === 1 ? 'Regisiter' : 'Login'}
        type={1}
      />
      <KeyboardAwareScrollView
        style={tailwind('flex-1 bg-white')}
        contentContainerStyle={tailwind('flex-grow justify-center')}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo Section */}
        <View style={tailwind('items-center ')}>
          <Image
            style={{ height: 120, width: '70%' }}
            resizeMode="contain"
            source={require('../../assets/images/SplashLogo.png')}
          />
        </View>

        {/* Illustration */}
        <View style={tailwind('items-center mt-5 mb-5')}>
          <Image
            style={{ height: 180, width: '85%' }}
            resizeMode="contain"
            source={require('../../assets/images/Login.png')}
          />
        </View>

        {/* Title */}
        <Text
          style={tailwind('text-black font-bold text-2xl text-center mt-8')}
        >
          {route?.params?.type === 1 ? 'Register' : 'Login'}
        </Text>
        {route?.params?.type === 1 ? (
          <View
            style={[tailwind('mt-6'), { width: '90%', alignSelf: 'center' }]}
          >
            <TextInput
              style={[
                tailwind('px-4 py-3 border rounded-xl text-black font-semi'),
                { borderColor: 'silver' },
              ]}
              placeholder="Enter Your Mobile Number"
              keyboardType="phone-pad"
              value={mobileno}
              onChangeText={txt => setMobileNo(txt)}
              placeholderTextColor="gray"
            />

            <TextInput
              style={[
                tailwind('px-4 py-3 mt-4 border rounded-xl font-semi text-black'),
                { borderColor: 'silver' },
              ]}
              placeholder="Enter Your OTP"
              keyboardType="number-pad"
              value={otp}
              onChangeText={txt => setOtp(txt)}
              placeholderTextColor="gray"
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PasswordScreen');
              }}
              style={[
                tailwind('px-6 py-3 mt-6 rounded-2xl bg-primary'),
                { width: '100%' },
              ]}
              activeOpacity={0.8}
            >
              <Text
                style={tailwind('text-white text-lg text-center font-semi')}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={[tailwind('mt-6'), { width: '90%', alignSelf: 'center' }]}
          >
            <TextInput
              style={[
                tailwind('px-4 py-3 border rounded-xl font-semi text-black'),
                { borderColor: 'silver' },
              ]}
              placeholder="Enter Your User ID"
              //   keyboardType="phone-pad"
              value={user_id}
              onChangeText={txt => setUser_id(txt)}
              placeholderTextColor="gray"
            />

            <TextInput
              style={[
                tailwind('px-4 py-3 mt-4 border rounded-xl font-semi text-black'),
                { borderColor: 'silver' },
              ]}
              placeholder="Enter Your Password"
              //   keyboardType="number-pad"
              value={pass}
              onChangeText={txt => setPass(txt)}
              placeholderTextColor="gray"
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PasswordScreen');
              }}
              style={[
                tailwind('px-6 py-3 mt-6 rounded-2xl bg-primary'),
                { width: '100%' },
              ]}
              activeOpacity={0.8}
            >
              <Text
                style={tailwind('text-white text-lg text-center font-semi')}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
}
