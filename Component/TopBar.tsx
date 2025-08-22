import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tailwind from '../tailwind';
import { BackIcon } from '../assets/icons';

interface TopbarType {
  title: string;
  type: number;
}

const Topbar = (props: TopbarType) => {
  const navigation = useNavigation();
  if (props.type === 1) {
    return (
      <View
        style={[
          tailwind('flex-row items-center  px-3 '),
          {
            backgroundColor: 'white',
            borderBottomWidth:1,borderBottomColor:"silver"
          },
        ]}>
        <TouchableOpacity
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
          <BackIcon  />
        </TouchableOpacity>
        <View style={[tailwind('flex-1 '), {marginRight: 10}]}>
          <Text
            style={[
              tailwind(' py-4 text-primary font-medium font-15'),
              {textAlign: 'right'},
            ]}>
            {props?.title}
          </Text>
        </View>
      </View>
    );
  } else if (props.type === 2) {
    return (
      <View style={[tailwind('flex-row items-center bg-primary '), {}]}>
        <BackIcon color={'#0A8E45'} />
        <View style={[tailwind('flex-1 '), {marginRight: 10}]}>
          <Text
            style={[
              tailwind(' py-4 text-white font-medium font-15'),
              {textAlign: 'right'},
            ]}>
            {props?.title}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[tailwind('flex-row items-center bg-primary '), {}]}>
        <TouchableOpacity
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
          <BackIcon />
        </TouchableOpacity>
        <View style={[tailwind('flex-1 mr-3')]}>
          <Text
            numberOfLines={1}
            style={[
              tailwind(' py-4 text-white font-medium font-15 w-full'),
              {textAlign: 'right'},
            ]}>
            {props?.title}
          </Text>
        </View>
      </View>
    );
  }
};

export default Topbar;
