import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useRef } from 'react';
import tailwind from '@tailwind';
import QuantityActions from './QuantityActions';
import { useSelector } from 'react-redux';
interface Prototype {
  img: any;
  name: string;
  key: any;
  id: any;
}
export const ProductCart = (props: Prototype) => {
  const CartState = useSelector((state: any) => state.user.cart);
  const previeousUid = useRef(null);

  const quantity = useSelector(state => {
    try {
      let uuid = props.id;
      let isInCart = state.user.cart.filter(item => item.uuid === uuid);

      return isInCart.length > 0 ? isInCart[isInCart.length - 1].quantity : 0;
    } catch (err) {
      console.log('quantity err', err);
      return 0;
    }
  });
  console.log('CartState', CartState);
  const initiateDecrement = useCallback(() => {
    let items = CartState.filter(item => item.uuid === item?.id);
    let uuid = props?.id;

    // Pinklog('initiateDecrement uuid',uuid)
    props.decrement(uuid);
    // props.decrement(items[0].uuid);
    // if (items.length === 1) {
    //   props.decrement(items[0].uuid);
    // } else {
    //   navigation.navigate('GlobalModalScreen', {
    //     target: 'blockDecrement',
    //     title: 'Do you want edit this product in cart ?',
    //     info: 'Multiple customized products added to your cart',
    //   });
    // }
  }, [CartState]);

  const initiateIncrement = useCallback(() => {
    (async () => {
      let uuid = props?.id;
      // Pinklog('initiateIncrement selectedcolor',selectedcolor)
      // Pinklog('initiateIncrement uuid',uuid)
      //let uuid = cartItemUniqueIdGen(props.product_id,svar);

      let cartObj = {
        uuid: uuid,
        product_id: props.id,
        product_name: props.name,
        //   Sp_price: svar?.product_guest_user_price,
        //   Pp_price: svar?.product_regular_user_price,
        //   mrp_price: svar?.product_mrp_price,
        //   add_shopping_wallet:svar?.add_shopping_wallet,
        image: props?.img,
        //   selected_variation: null,
        //   selected_addons: [],
        //   addons: [],
        //   variations: svar,
        //   customisable: false,
        //   isCombo: false,
        //   eggless: props.item.eggless,
        //   product_color_var: selectedcolor ? selectedcolor : null,
      };
      previeousUid.current = uuid;
      console.log('cartObj', cartObj);
      props.increment(Object.freeze(cartObj));
    })();
  }, []);

  return (
    <View style={[tailwind('px-3')]}>
      <View style={[tailwind('my-3 ')]} key={props?.id}>
        <View
          style={[tailwind('flex-row  items-center rounded-xl  bg-background   ')]}
        >
          <Image
            style={[tailwind('rounded-xl'), { width: 80, height: 80 }]}
            source={props?.img}
          />
          <Text style={[tailwind('ml-3 font-18 font-bold')]}>
            {props?.name}
          </Text>
          <View style={[tailwind('mr-3'), { marginLeft: 'auto' }]}>
            <QuantityActions
              type={1}
              id={props.id}
              initiateIncrement={initiateIncrement}
              initiateDecrement={initiateDecrement}
              quantity={quantity}
              product_message={''}
              product_status={true}

              //   variationsdata={}
              //   customization={}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
