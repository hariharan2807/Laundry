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
import { useNavigation } from '@react-navigation/native';
import { Topbar } from '@Component';
export default function PasswordScreen() {
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const navigation = useNavigation();

  return (
    <View  style={tailwind('flex-1 bg-white')}>
      <Topbar title='Set Password' type={1}/>
    <ScrollView
     
      contentContainerStyle={tailwind('flex-grow justify-center')}
      keyboardShouldPersistTaps="handled"
    >
      <View style={tailwind('items-center ')}>
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
      <Text style={tailwind('text-black font-bold text-2xl text-center mt-8')}>
        Password
      </Text>
      <View style={[tailwind('mt-6'), { width: '90%', alignSelf: 'center' }]}>
        <TextInput
          style={[
            tailwind('px-4 py-3 border rounded-xl font-semi text-black'),
            { borderColor: 'silver' },
          ]}
          placeholder="Enter Password"
          value={pass}
          onChangeText={txt => setPass(txt)}
          placeholderTextColor="gray"
        />
        <TextInput
          style={[
            tailwind('px-4 py-3 mt-4 border rounded-xl font-semi text-black'),
            { borderColor: 'silver' },
          ]}
          placeholder="Enter Re-Password"
          value={rePass}
          onChangeText={txt => setRePass(txt)}
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('BottomTabNavigation');
          }}
          style={[
            tailwind('px-6 py-3 mt-6 rounded-2xl bg-primary'),
            { width: '100%' },
          ]}
          activeOpacity={0.8}
        >
          <Text style={tailwind('text-white text-lg text-center font-semi')}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>

  );
}
