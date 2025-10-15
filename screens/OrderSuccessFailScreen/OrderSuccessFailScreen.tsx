import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tailwind from '@tailwind';
import { Topbar } from '@Component';
import LottieView from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function OrderSuccessFailScreen() {
  const route = useRoute();
  const navigation=useNavigation();
  return (
    <View style={tailwind('bg-white h-full flex flex-col justify-center')}>
      {route?.params?.status ? (
        <>
          <View style={[tailwind('flex flex-row justify-center items-center')]}>
            {/* <Image
              resizeMode="contain"
              source={assets.statusSuccess}
              style={[tailwind('w-52 h-52')]}
            /> */}
            <LottieView
              source={require('../../assets/gif/succes.json')}
              autoPlay
              loop
              resizeMode="contain"
              style={[tailwind('w-52 h-52')]}
              // style={{width: 300, height: 250}}
            />
          </View>
          <Text
            style={[
              tailwind('font-bold text-center text-gray pb-4 text-3xl'),
              { fontWeight: Platform?.OS === 'android' ? 'normal' : '500' },
            ]}
          >
            Successs !
          </Text>
          {/* <Text
            style={[
              tailwind('font-semi mx-7 py-2 text-center text-gray font-15'),
            ,{fontWeight:Platform?.OS==='android'?'normal':"500"}]}>
            Your Order has been Placed Succesfully !! Successs
          </Text>
          <Text
            style={[
              tailwind('font-medium  py-1 text-center text-primary font-15'),
            {fontWeight:Platform?.OS==='android'?'normal':"500"}]}>
            Your Item will be prepared within 20 Minutes
          </Text> */}
          <TouchableOpacity
            // onPress={goToOrderStatusScreen}
            onPress={()=>{
              navigation.navigate('SingleOrderScreen', { type_data: 1 });
            }}
            style={[tailwind('mx-3 my-2 p-4 bg-primary rounded')]}
          >
            <Text
              style={[
                tailwind('text-center text-white font-16 font-bold'),
                { fontWeight: Platform?.OS === 'android' ? 'normal' : '500' },
              ]}
            >
              Track Order
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={goToHome}
            style={[tailwind('mx-3 my-2 p-4 bg-secondary rounded')]}>
            <Text
              style={[tailwind('font-regular text-center text-white font-16')]}>
              Back to Home
            </Text>
          </TouchableOpacity> */}
        </>
      ) : (
        <>
          <View style={[tailwind('flex flex-row justify-center')]}>
            {/* <Image
              resizeMode="contain"
              source={assets.statusFail}
              style={[tailwind('w-52 h-52')]}
            /> */}
            <FastImage
              source={require('../../assets/gif/erro.gif')}
              style={[tailwind('w-52 h-52')]}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text
            style={[
              tailwind('font-bold text-center text-secondary py-4 text-3xl'),
              { fontWeight: Platform?.OS === 'android' ? 'normal' : '500' },
            ]}
          >
            Failed
          </Text>
          <Text
            style={[
              tailwind('font-semi mx-7 py-2 text-center text-gray font-15'),
              { fontWeight: Platform?.OS === 'android' ? 'normal' : '500' },
            ]}
          >
            Some Technical problem on our side, Please try Again
          </Text>
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={[tailwind('mx-3 my-2 p-4 bg-primary rounded')]}
          >
            <Text
              style={[
                tailwind('font-medium text-center text-white font-16'),
                { fontWeight: Platform?.OS === 'android' ? 'normal' : '500' },
              ]}
            >
              Go Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={cacncelOrder}
            style={[tailwind('mx-3 my-2 p-4 bg-secondary rounded')]}
          >
            <Text
              style={[
                tailwind('font-medium text-center text-white font-16'),
                { fontWeight: Platform?.OS === 'android' ? 'normal' : '500' },
              ]}
            >
              Cancel Order
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
