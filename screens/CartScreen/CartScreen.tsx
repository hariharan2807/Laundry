import tailwind from '@tailwind';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent, Topbar } from '@Component';
import CartComponent from '../../Component/CartComponent';
import { decrementAction, incrementAction } from '@actions/userActions';
import { useNavigation } from '@react-navigation/native';
import assets_manifest from '@assets';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';

export default function CartScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const CartState = useSelector((state: any) => state.user.cart);
  const [visible, setVisible] = useState(false);
  const increment = useCallback((payload: any) => {
    dispatch(incrementAction(payload));
  }, []);
  const decrement = useCallback((uuid: any) => {
    dispatch(decrementAction(uuid));
  }, []);
  const mismatchedItems = CartState.filter((item: any) => item?.type === 2);
  const groupedByMismatchId = mismatchedItems.reduce((acc: any, item: any) => {
    if (!acc[item.mismatch_id]) {
      acc[item.mismatch_id] = [];
    }
    acc[item.mismatch_id].push(item);
    return acc;
  }, {});
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size: number) => (width / 375) * size;
  const CreateOrder = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.navigate('SingleOrderScreen', { type_data: 1 });
    }, 5000);
  };
  return (
    <View style={[tailwind('h-full bg-background')]}>
      <Topbar title="Cart" type={1} />
      {CartState?.length > 0 ? (
        <View style={tailwind('flex-1 w-full')}>
          <View style={[tailwind(' mx-3 my-3')]}>
            <ButtonComponent
              navigation={navigation}
              naviagte={'MisMatchScreen'}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              tailwind('pb-20'),
              { paddingBottom: height * 0.1 },
            ]}
          >
            <Text
              style={[
                tailwind('font-bold mx-5 my-3'),
                { color: '#4F4F4F', fontSize: scaleFont(16) },
              ]}
            >
              Cart Items
            </Text>
            {CartState.filter((item: any) => item?.type === 1).map(
              (item: any, index: number) => (
                <View key={index} style={tailwind('mb-3')}>
                  <CartComponent
                    isVeg={item.eggless == 0 || item.eggless == 1}
                    veg={item.eggless == 0}
                    quantity={item?.quantity}
                    image={item.image}
                    product_name={item?.product_name}
                    price={200}
                    id={item?.product_id}
                    offer={item?.offer}
                    is_favourite={item?.is_favourite}
                    description={item?.description}
                    product_image={item?.product_image}
                    variation={item.variations}
                    increment={increment}
                    decrement={decrement}
                    color_variation={item.product_color_var}
                    item={item}
                  />
                </View>
              ),
            )}
            {Object.keys(groupedByMismatchId).map(mismatchId => (
              <View key={mismatchId}>
                <Text
                  style={[
                    tailwind('font-bold mx-5 my-3'),
                    { color: '#4F4F4F', fontSize: scaleFont(16) },
                  ]}
                >
                  Mismatched Items (ID: {mismatchId})
                </Text>
                {groupedByMismatchId[mismatchId].map(
                  (item: any, index: number) => (
                    <View key={index} style={tailwind('mb-3')}>
                      <CartComponent
                        isVeg={item.eggless == 0 || item.eggless == 1}
                        veg={item.eggless == 0}
                        quantity={item?.quantity}
                        image={item.image}
                        product_name={item?.product_name}
                        price={200}
                        id={item?.product_id}
                        offer={item?.offer}
                        is_favourite={item?.is_favourite}
                        description={item?.description}
                        product_image={item?.product_image}
                        variation={item.variations}
                        increment={increment}
                        decrement={decrement}
                        color_variation={item.product_color_var}
                        item={item}
                      />
                    </View>
                  ),
                )}
              </View>
            ))}
          </ScrollView>
          <View style={[tailwind('h-20')]} />
          <TouchableOpacity
            onPress={() => {
              CreateOrder();
            }}
            style={[
              tailwind('px-6 py-3 mt-6 ml-3 mr-3 rounded-2xl bg-primary'),
              {
                position: 'absolute',
                bottom: height * 0.12,
                width: width * 0.94,
              },
            ]}
            activeOpacity={0.8}
          >
            <Text
              style={[
                tailwind('text-white text-center font-semi'),
                { fontSize: scaleFont(16) },
              ]}
            >
              Order Placed
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            tailwind('h-full items-center'),
            { justifyContent: 'center' },
          ]}
        >
          <Image
            style={{ height: 150, width: 200 }}
            source={assets_manifest?.LogoNew}
            resizeMode="contain"
          />
          <Text
            style={[
              tailwind('font-semi mt-5 text-gray'),
              { fontSize: scaleFont(14) },
            ]}
          >
            No Cart Found
          </Text>
        </View>
      )}
      <Modal
        isVisible={visible}
        animationInTiming={150}
        animationOutTiming={150}
        onBackdropPress={() => setVisible(true)}
      >
        <View
          style={[
            tailwind('bg-white pb-5 px-5 py-5 rounded-xl items-center'),
            {},
          ]}
        >
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={require('../../assets/gif/loading.gif')}
            style={[tailwind(''), { height: 200, width: 200 }]}
          />
          <View
            style={[
              tailwind('flex-row flex-wrap'),
              { justifyContent: 'space-between' },
            ]}
          ></View>
        </View>
      </Modal>
    </View>
  );
}
