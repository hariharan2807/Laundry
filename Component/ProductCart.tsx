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
// console.log("props?.type === 2props?.type === 2",props?.type,uuid,state.user.cart)
      if (props?.type === 2) {
        // ✅ type 2: must match both uuid + mismatch_id
        const match = state.user.cart.find(
          item => item.uuid === uuid && item.mismatch_id === props.mismatch_id,
        );
        return match ? match.quantity : 0;
      } else if(props?.type === 1) {
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
  const initiateDecrement = useCallback(() => {
    props.decrement({
      product_id: props.id,
      type: props?.type,
      mismatch_id: props?.type === 2 ? props?.mismatch_id : "0",
    });
  }, [props.id, props?.type, props?.mismatch_id, props.decrement]);

  const initiateIncrement = useCallback(() => {
    (async () => {
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
        mismatch_id: props?.type === 2 ? props?.mismatch_id : "0", // ✅ Only add mismatch_id if type=2
        image: props?.img,
      };

      previeousUid.current = uuid;
      // console.log('cartObj', cartObj);
      props.increment(Object.freeze(cartObj));
    })();
  }, [props?.id, props?.name, props?.type, props?.mismatch_id, props?.img]);

  return (
    <View style={[tailwind('px-3')]}>
      <View style={[tailwind('my-1')]} key={props?.id}>
        <View
          style={[
            tailwind('flex-row items-center rounded-xl px-2 py-2'),
            { backgroundColor: '#E8E8E8', width: '100%' },
          ]}
        >
          <Image
            style={[tailwind('rounded-xl'), { width: 80, height: 80 }]}
            source={{ uri: props?.img }}
          />
          <View style={[tailwind('flex-1 ml-3')]}>
            <Text
              style={[tailwind('font-18 font-bold text-gray-800')]}
              numberOfLines={2}
            >
              {props?.name}
            </Text>
          </View>
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
