import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import tailwind from '@tailwind';
import { useDispatch } from 'react-redux';
import { saveLocationAction } from '@actions/appActions';
import assets_manifest from '@assets';
import Swiper from 'react-native-swiper';
import { SearchIcon } from '../../assets/icons';
import { QuantityActions } from '@Component';
import { ProductCart } from '../../Component/ProductCart';
import { decrementAction, incrementAction } from '@actions/userActions';
import { useNavigation } from '@react-navigation/native';
export default function DashboardScreen() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    dispatch(saveLocationAction('boobpathi'));
  }, []);
  const BannerData = [
    {
      id: 1,
      img: assets_manifest?.demoBanner,
    },
    {
      id: 2,
      img: assets_manifest?.demoBanner,
    },
    {
      id: 3,
      img: assets_manifest?.demoBanner,
    },
  ];
  const Data = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/81dYEkq+25L._SY879_.jpg',
      name: 'Shirt',
    },
    {
      id: 4,
      img: 'https://m.media-amazon.com/images/I/61Y5LDU5O5L._SX679_.jpg',
      name: 'Shots',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/716sdEm10ML._SY879_.jpg',
      name: 'Pant',
    },
    {
      id: 5,
      img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/k/c/l/32-ptp-05-005-poplens-original-imah4c5zrutbykdh.jpeg',
      name: 'Lower',
    },
    {
      id: 3,
      img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/c/g/m-82091475-try-this-original-imahdfj8evftyhq9.jpeg',
      name: 'TShirt',
    },
  ];
  const increment = useCallback((payload: any) => {
    dispatch(incrementAction(payload));
  }, []);
  const decrement = useCallback((uuid: any) => {
    dispatch(decrementAction(uuid));
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);
  return (
    <View style={[tailwind('h-full bg-background'), {}]}>
      <View style={[tailwind('mt-3 mx-3')]}>
        <Text style={[tailwind('font-18 font-bold')]}>Hari haran</Text>
        <Text style={[tailwind('font-14 font-bold text-gray-700')]}>
          LAU1289
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate('SearchScreen');
        }}
        activeOpacity={0.8}
        style={[
          tailwind('mx-3 px-3 my-3 border  bg-white flex-row rounded-xl py-3'),
          { borderColor: 'silver' },
        ]}
      >
        <SearchIcon />
        <Text style={[tailwind('font-15 ml-3 font-semi text-gray')]}>
          Search Product
        </Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['green']}
          />
        }
      >
        <View style={[tailwind('mt-3')]}>
          <View style={[tailwind(''), { height: 180 }]}>
            {BannerData ? (
              <Swiper
                style={[tailwind('')]}
                index={index}
                showsPagination={true}
                loop={true}
                autoplay
                autoplayTimeout={3}
                paginationStyle={{
                  bottom: 0,
                }}
                dot={
                  index == 1 ? (
                    <View
                      style={{
                        backgroundColor: 'pink',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                      }}
                    />
                  )
                }
                activeDot={
                  index == 1 ? (
                    <View
                      style={{
                        backgroundColor: '#49A600',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: '#49A600',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                      }}
                    />
                  )
                }
              >
                {BannerData?.map((items: any, index: any) => {
                  return (
                    <View style={[tailwind('items-center')]} key={index}>
                      <Image
                        source={items?.img}
                        style={[
                          tailwind('items-center '),
                          {
                            width: '95%',
                            height: 160,
                            borderRadius: 15,
                          },
                        ]}
                        resizeMode="cover"
                      />
                    </View>
                  );
                })}
              </Swiper>
            ) : null}
          </View>
        </View>
        {Data?.map((items: any, index: any) => {
          return (
            <ProductCart
              type={1}
              id={items?.id}
              img={items?.img}
              name={items?.name}
              key={index}
              increment={increment}
              decrement={decrement}
            />
          );
        })}
        <View style={[tailwind('h-40')]} />
      </ScrollView>
    </View>
  );
}
