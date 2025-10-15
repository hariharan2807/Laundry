import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import tailwind from '@tailwind';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Topbar from '../../Component/TopBar';
import { errorBox } from '../../workers/utils';

export default function LoginScreen() {
  const [mobileno, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [user_id, setUser_id] = useState('');
  const [pass, setPass] = useState('');
  const [otpVisible, setOtpVisible] = useState(false);
  const otpRef = useRef(null);
  const mobileRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const isRegister = route?.params?.type === 1 && !route?.params?.Forget;
  const isForget = route?.params?.Forget;
  const isLogin = !isRegister && !isForget;
  useFocusEffect(
    useCallback(() => {
      setMobileNo('');
      setOtp('');
    
    }, []),
  );
  useEffect(() => {
    if (otpVisible && otpRef.current) {
      setTimeout(() => otpRef.current.focus(), 300);
    }
  }, [otpVisible]);
  useEffect(() => {
    if (mobileno.length !== 10) {
      setOtp('');
      setOtpVisible(false);
    }
  }, [mobileno]);
  const handleMobileChange = txt => {
    const cleanText = txt.replace(/[^0-9]/g, '');
    setMobileNo(cleanText);
    if (otpVisible) setOtpVisible(false);
  };
  const handleRegister = () => {
    console.log('Register');
    if (!mobileno) {
      return errorBox('Enter Your Mobile Number');
    }
    if (mobileno.length !== 10) {
      return errorBox('Invalid Mobile Number');
    }
    setOtpVisible(true);
  };
  const handleForgetPassword = () => {
    console.log('Forget');

    if (!mobileno) {
      return errorBox('Enter Your Mobile Number');
    }
    if (mobileno.length !== 10) {
      return errorBox('Invalid Mobile Number');
    }
    setOtpVisible(true);
  };
  const handleVerifyOtp = () => {
    console.log('OTP');
    if (!otp) {
      return errorBox('Enter Your OTP');
    }
    if (otp !== '1234') {
      return errorBox('Invalid OTP');
    }
    if (isRegister) {
      console.log('isRegister OTP');
      setMobileNo('');
      setOtp('');
      navigation.navigate('PasswordScreen', { mode: 'register' });
    } else if (isForget) {
      console.log('Forget OTP');
      setMobileNo('');
      setOtp('');
      navigation.navigate('PasswordScreen', { mode: 'reset' });
    }
  };
  const handleLogin = () => {
    console.log('Login');
    if (!user_id || !pass) {
      return errorBox('Enter User ID and Password');
    } else {
      setUser_id('');
      setPass('');
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomTabNavigation' }],
      });
      // navigation.navigate('BottomTabNavigation');
      return;
    }
  };
  return (
    <View style={[tailwind('h-full')]}>
      <Topbar
        title={isForget ? 'Forget Password' : isRegister ? 'Register' : 'Login'}
        type={2}
      />
      <KeyboardAwareScrollView
        style={tailwind('flex-1 bg-white')}
        contentContainerStyle={tailwind('flex-grow justify-center')}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tailwind('items-center')}>
          <Image
            style={{ height: 120, width: '70%' }}
            resizeMode="contain"
            source={require('../../assets/images/SplashLogo.png')}
          />
        </View>
        <View style={tailwind('items-center mt-5 mb-5')}>
          <Image
            style={{ height: 180, width: '85%' }}
            resizeMode="contain"
            source={require('../../assets/images/Login.png')}
          />
        </View>
        <Text
          style={tailwind('text-black font-bold text-2xl text-center mt-8')}
        >
          {isForget ? 'Forget Password' : isRegister ? 'Register' : 'Login'}
        </Text>
        {(isRegister || isForget) && (
          <View
            style={[tailwind('mt-6'), { width: '90%', alignSelf: 'center' }]}
          >
            <TextInput
              style={[
                tailwind('px-4 py-3 border rounded-xl text-black font-semi'),
                { borderColor: 'silver' },
              ]}
              ref={mobileRef}
              placeholder="Enter Your Mobile Number"
              keyboardType="phone-pad"
              value={mobileno}
              maxLength={10}
              onChangeText={handleMobileChange}
              placeholderTextColor="gray"
            />
            {otpVisible && (
              <TextInput
                style={[
                  tailwind(
                    'px-4 py-3 mt-4 border rounded-xl text-black font-semi',
                  ),
                  { borderColor: 'silver' },
                ]}
                ref={otpRef}
                placeholder="Enter Your OTP"
                keyboardType="number-pad"
                value={otp}
                maxLength={4}
                onChangeText={setOtp}
                placeholderTextColor="gray"
              />
            )}
            <TouchableOpacity
              onPress={() => {
                if (otpVisible) {
                  handleVerifyOtp();
                } else {
                  if (isRegister) handleRegister();
                  else if (isForget) handleForgetPassword();
                }
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
                {otpVisible ? 'Verify OTP' : isForget ? 'Send OTP' : 'Register'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LoginScreen', { type: 0, Forget: false })
              }
              style={[tailwind('mt-4')]}
              activeOpacity={0.8}
            >
              <Text
                style={tailwind('text-primary text-center text-base font-semi')}
              >
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {isLogin && (
          <View
            style={[tailwind('mt-6'), { width: '90%', alignSelf: 'center' }]}
          >
            <TextInput
              style={[
                tailwind('px-4 py-3 border rounded-xl text-black font-semi'),
                { borderColor: 'silver' },
              ]}
              placeholder="Enter Your User ID"
              value={user_id}
              onChangeText={setUser_id}
              placeholderTextColor="gray"
            />
            <TextInput
              style={[
                tailwind(
                  'px-4 py-3 mt-4 border rounded-xl text-black font-semi',
                ),
                { borderColor: 'silver' },
              ]}
              placeholder="Enter Your Password"
              value={pass}
              onChangeText={setPass}
              placeholderTextColor="gray"
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LoginScreen', { type: 1, Forget: true })
              }
              style={[tailwind('mt-3'), { marginLeft: 'auto' }]}
              activeOpacity={0.8}
            >
              <Text style={tailwind('text-primary text-sm font-semi')}>
                Forget Password ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogin}
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

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LoginScreen', { type: 1, Forget: false })
              }
              style={[tailwind('mt-4')]}
              activeOpacity={0.8}
            >
              <Text
                style={tailwind('text-primary text-center text-base font-semi')}
              >
                Don’t have an account? Register
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
}
