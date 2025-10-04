import tailwind from '@tailwind';
import { View, Text, TextInput, FlatList } from 'react-native';
import React, { useCallback, useState, useMemo } from 'react';
import { Topbar } from '@Component';
import { ProductCart } from '../../Component/ProductCart';
import { decrementAction, incrementAction } from '@actions/userActions';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../assets/icons';

export default function SearchScreen() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const Data = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/81dYEkq+25L._SY879_.jpg',
      name: 'Wash',
    },
    {
      id: 4,
      img: 'https://m.media-amazon.com/images/I/61Y5LDU5O5L._SX679_.jpg',
      name: 'Cleaning',
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
  const increment = useCallback((payload: any) => {
    dispatch(incrementAction(payload));
  }, []);
  const decrement = useCallback((uuid: any) => {
    dispatch(decrementAction(uuid));
  }, []);
  const filteredData = useMemo(() => {
    if (!searchText.trim()) return Data;
    return Data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText, Data]);
  return (
    <View style={[tailwind('h-full')]}>
      <Topbar title="Search" type={1} />
      <View
        style={[
          tailwind('mx-3 px-3 my-3 border bg-white flex-row rounded-xl py-3'),
          { borderColor: 'silver' },
        ]}
      >
        <SearchIcon />
        <TextInput
          placeholder="Search Product"
          placeholderTextColor={'gray'}
          value={searchText}
          onChangeText={setSearchText}
          style={[
            tailwind('font-15 ml-3 flex-1 font-semi text-gray'),
            { color: 'black' },
          ]}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCart
            type={1}
            id={item.id}
            img={item.img}
            name={item.name}
            increment={increment}
            decrement={decrement}
          />
        )}
      />
      {filteredData.length === 0 && (
        <Text style={[tailwind('text-center text-gray-500 mt-5')]}>
          No products found
        </Text>
      )}
    </View>
  );
}
