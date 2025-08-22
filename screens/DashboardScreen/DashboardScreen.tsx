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

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

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
      name: 'Wash',
    },
    // {
    //   id: 4,
    //   img: 'https://m.media-amazon.com/images/I/61Y5LDU5O5L._SX679_.jpg',
    //   name: 'Cleaning',
    // },
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
  return (
    <View style={[tailwind('h-full bg-background'), {}]}>
      <View style={[tailwind('mt-3 mx-3')]}>
        <Text style={[tailwind('font-18 font-bold')]}>User Name</Text>
        <Text style={[tailwind('font-14 font-bold text-gray-700')]}>
          User ID
        </Text>
      </View>

      <View
        style={[
          tailwind('mx-3 px-3 my-3 border  bg-white flex-row rounded-xl py-3'),
          { borderColor: 'silver' },
        ]}
      >
        <SearchIcon />
        <Text style={[tailwind('font-15 ml-3')]}>Search Product</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  bottom: 0, // 👈 push dots upward (inside the image area)
                }}
                // horizontal={!isRTL}
                // autoplayDirection={isRTL}
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
                        // marginTop: 2,
                        // marginBottom: 10,
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
                        // marginTop: 2,
                        // marginBottom: 10,
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
                        // marginTop: 2,
                        // marginBottom: 3,
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
                        // defaultSource={assets_manifest?.}
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
