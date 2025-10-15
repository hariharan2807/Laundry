import React, { useCallback, useRef, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import tailwind from '../tailwind';
import { cartItemUniqueIdwithoutCust, errorBox } from '../workers/utils';
interface CartCompType {
  isVeg: boolean;
  veg: boolean;
  key: number;
  quantity: number;
  image: string;
  product_name: string;
  price: number;
  id: number;
  offer: number;
  is_favourite: boolean;
  description: string;
  product_image: string;
  variation: any;
  increment: any;
  decrement: any;
  color_variation: any;
  item: any;
}
const CartComponent = (props: CartCompType) => {
  const initiateDecrement = useCallback(() => {
    props.decrement({
      product_id: props.id,
      type: props?.item?.type,
      mismatch_id: props?.item?.type === 2 ? props?.item?.mismatch_id : "0",
    });
  }, [props.id, props?.item?.type, props?.item?.mismatch_id, props.decrement]);
  const initiateIncrement = useCallback(() => {
    if (
      props?.item?.type === 2 &&
      (!props?.item?.mismatch_id || props?.item?.mismatch_id.trim() === '')
    ) {
      return errorBox('Please Enter ID');
    }
    const cartItem = {
      uuid: `${props.id}_${
        props?.item?.type === 2 ? props?.item?.mismatch_id : 'base'
      }`,
      product_id: props.id,
      product_name: props.product_name,
      type: props.item?.type,
      mismatch_id: props?.item?.type === 2 ? props?.item?.mismatch_id : "0",
      image: props.image,
    };
    props.increment(cartItem);
  }, [
    props.id,
    props.product_name,
    props?.item?.type,
    props?.item.mismatch_id,
    props.image,
    props.increment,
  ]);
  return (
    <View style={tailwind('px-3 my-1.5')}>
      <View
        style={[
          tailwind('flex-row items-center rounded-2xl'),
          {
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
            backgroundColor: '#E8E8E8',
          },
        ]}
      >
        <TouchableOpacity>
          <Image
            source={{ uri: props?.image }}
            style={[tailwind('rounded-xl'), { width: 75, height: 75 }]}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={tailwind('flex-1 px-3')}>
          <Text style={tailwind('font-18 font-bold ')} numberOfLines={2}>
            {props?.product_name}
          </Text>
        </View>
        <View
          style={tailwind(
            'flex-row bg-white rounded-xl py-2 px-2 items-center mr-2',
          )}
        >
          <TouchableOpacity
            onPress={initiateDecrement}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={[
              {
                width: 30,
                height: 30,
                borderWidth: 1,
                borderColor: '#60B244',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
              },
              tailwind(''),
            ]}
          >
            <Text style={tailwind('font-bold text-lg text-gray-700')}>-</Text>
          </TouchableOpacity>
          <View style={[tailwind('mx-5')]}>
            <Text style={tailwind('font-bold text-base text-gray-900')}>
              {props?.quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={initiateIncrement}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={[
              {
                width: 30,
                height: 30,
                borderWidth: 1,
                borderColor: '#60B244',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
              },
              tailwind(''),]}>
            <Text style={tailwind('font-bold text-lg text-gray-700')}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartComponent;
