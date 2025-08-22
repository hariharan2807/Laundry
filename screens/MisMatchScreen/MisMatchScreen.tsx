import { View, Text, TextInput } from 'react-native';
import React, { useCallback, useState } from 'react';
import tailwind from '@tailwind';
import { Topbar } from '@Component';
import { ProductCart } from '../../Component/ProductCart';
import { decrementAction, incrementAction } from '@actions/userActions';
import { useDispatch } from 'react-redux';
export default function MisMatchScreen() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const increment = useCallback((payload: any) => {
    dispatch(incrementAction(payload));
  }, []);
  const decrement = useCallback((uuid: any) => {
    dispatch(decrementAction(uuid));
  }, []);
  const Data = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/81dYEkq+25L._SY879_.jpg',
      name: 'Wash',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/716sdEm10ML._SY879_.jpg',
      name: 'Dry',
    },
    {
      id: 3,
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
            tailwind('px-4 py-3 border rounded-xl text-black'),
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
    </View>
  );
}
