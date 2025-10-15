import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import tailwind from '@tailwind';
import { Topbar } from '@Component';
import { ProductCart } from '../../Component/ProductCart';
import { decrementAction, incrementAction } from '@actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
export default function MisMatchScreen() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const increment = useCallback((payload: any) => {
    dispatch(incrementAction(payload));
  }, []);
  const decrement = useCallback((uuid: any) => {
    dispatch(decrementAction(uuid));
  }, []);
  const navigation=useNavigation();
  const Data = [
    {
      id: 11,
      img: 'https://m.media-amazon.com/images/I/81dYEkq+25L._SY879_.jpg',
      name: 'Wash',
    },
    {
      id: 21,
      img: 'https://m.media-amazon.com/images/I/716sdEm10ML._SY879_.jpg',
      name: 'Dry',
    },
    {
      id: 31,
      img: 'https://m.media-amazon.com/images/I/61Y5LDU5O5L._SX679_.jpg',
      name: 'Cleaning',
    },
  ];
  return (
    <View style={[tailwind('h-full '), { backgroundColor: '#F3F3F3' }]}>
      <Topbar title="Mismatched Item" type={1} />
      <View style={[tailwind('mx-3 my-3 mt-5')]}>
        <TextInput
          style={[
            tailwind('px-4 py-3 border rounded-xl  font-semi text-gray'),
            { borderColor: 'silver' },
          ]}
          placeholder="Enter Your ID"
          keyboardType="phone-pad"
          value={id}
          onChangeText={txt => setId(txt)}
          placeholderTextColor="gray"
        />
      </View>
      {Data?.map((items: any, index: any) => {
        return (
          <ProductCart
            type={2}
            id={items?.id}
            mismatch_id={id}
            img={items?.img}
            name={items?.name}
            key={index}
            increment={increment}
            decrement={decrement}
          />
        );
      })}
      <TouchableOpacity 
      onPress={()=>{
        navigation.goBack();
      }}
      style={[tailwind('w-full'),{position: 'absolute', bottom: 20}]}>
        <View
          style={[
            tailwind(`items-center px-3 py-3 mx-3 rounded-xl bg-primary`),
            {  },
          ]}
        >
          <Text  style={[tailwind('font-16 font-bold text-white text-center')]}>View Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
