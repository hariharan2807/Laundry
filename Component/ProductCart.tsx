import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useRef } from 'react';
import tailwind from '@tailwind';
import QuantityActions from './QuantityActions';
import { useSelector } from 'react-redux';
import { errorBox } from '../workers/utils';
interface Prototype {
  img: any;
  name: string;
  key: any;
  id: any;
  type: number;
  mismatch_id: string;
}
export const ProductCart = (props: Prototype) => {
  const CartState = useSelector((state: any) => state.user.cart);
  const previeousUid = useRef(null);
  const quantity = useSelector(state => {
    try {
      let uuid = props.id;

      if (props?.type === 2) {
        // ✅ type 2: must match both uuid + mismatch_id
        const match = state.user.cart.find(
          item => item.uuid === uuid && item.mismatch_id === props.mismatch_id,
        );
        return match ? match.quantity : 0;
      } else {
        // ✅ type 1: match only uuid
        const match = state.user.cart.find(
          item => item.uuid === uuid && item.type === 1,
        );
        return match ? match.quantity : 0;
      }
    } catch (err) {
      console.log('quantity err', err);
      return 0;
    }
  });

  // const initiateDecrement = useCallback(() => {
  //   // let items = CartState.filter(item => item.uuid === item?.id);
  //   let uuid = props?.id;

  //   // Pinklog('initiateDecrement uuid',uuid)
  //   props.decrement(uuid);
  //   // props.decrement(items[0].uuid);
  //   // if (items.length === 1) {
  //   //   props.decrement(items[0].uuid);
  //   // } else {
  //   //   navigation.navigate('GlobalModalScreen', {
  //   //     target: 'blockDecrement',
  //   //     title: 'Do you want edit this product in cart ?',
  //   //     info: 'Multiple customized products added to your cart',
  //   //   });
  //   // }
  // }, [CartState]);
  const initiateDecrement = useCallback(() => {
    props.decrement({
      product_id: props.id,
      type: props?.type,
      mismatch_id: props?.type === 2 ? props?.mismatch_id : null,
    });
  }, [props.id, props?.type, props?.mismatch_id, props.decrement]);

  const initiateIncrement = useCallback(() => {
    (async () => {
      // 👉 Check validation only for type 2
      if (
        props?.type === 2 &&
        (!props?.mismatch_id || props?.mismatch_id.trim() === '')
      ) {
        return errorBox('Please Enter ID');
      }

      let uuid = props?.id;

      let cartObj = {
        uuid: uuid,
        product_id: props.id,
        product_name: props.name,
        type: props?.type,
        mismatch_id: props?.type === 2 ? props?.mismatch_id : null, // ✅ Only add mismatch_id if type=2
        image: props?.img,
      };

      previeousUid.current = uuid;
      console.log('cartObj', cartObj);

      // ✅ Freeze object before dispatch
      props.increment(Object.freeze(cartObj));
    })();
  }, [props?.id, props?.name, props?.type, props?.mismatch_id, props?.img]);

  return (
    <View style={[tailwind('px-3')]}>
  <View style={[tailwind('my-3')]} key={props?.id}>
    <View
      style={[
        tailwind('flex-row items-center rounded-xl px-3 py-3'),
        { backgroundColor: '#E8E8E8', width: '100%' },
      ]}
    >
      {/* Product Image */}
      <Image
        style={[tailwind('rounded-xl'), { width: 80, height: 80 }]}
        source={{ uri: props?.img }}
      />

      {/* Name + Actions */}
      <View style={[tailwind('flex-1 ml-3')]}>
        <Text
          style={[tailwind('font-18 font-bold text-gray-800')]}
          numberOfLines={2}
        >
          {props?.name}
        </Text>
      </View>

      {/* Quantity Actions */}
      <View style={[tailwind('ml-3')]}>
        <QuantityActions
          type={1}
          id={props.id}
          initiateIncrement={initiateIncrement}
          initiateDecrement={initiateDecrement}
          quantity={quantity}
          product_message={''}
          product_status={true}
        />
      </View>
    </View>
  </View>
</View>

  );
};
