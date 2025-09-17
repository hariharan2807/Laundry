import tailwind from '@tailwind';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent, Topbar } from '@Component';
import CartComponent from '../../Component/CartComponent';
import { decrementAction, incrementAction } from '@actions/userActions';
import { useNavigation } from '@react-navigation/native';
import assets_manifest from '@assets';
export default function CartScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const CartState = useSelector((state: any) => state.user.cart);

  console.log('CartStateCartStateCartStateCartState', CartState);

  const increment = useCallback((payload: any) => {
    dispatch(incrementAction(payload));
  }, []);

  const decrement = useCallback((uuid: any) => {
    dispatch(decrementAction(uuid));
  }, []);
  const mismatchedItems = CartState.filter((item: any) => item?.type === 2);

  // Step 2: Group by mismatch_id
  const groupedByMismatchId = mismatchedItems.reduce((acc: any, item: any) => {
    if (!acc[item.mismatch_id]) {
      acc[item.mismatch_id] = [];
    }
    acc[item.mismatch_id].push(item);
    return acc;
  }, {});
  const { width, height } = Dimensions.get('window');

  // a helper for responsive font
  const scaleFont = (size: number) => (width / 375) * size; // 375 = iPhone X base width

  return (
    <View style={[tailwind('h-full bg-background')]}>
      <Topbar title="Cart" type={1} />

      {CartState?.length > 0 ? (
        <View style={tailwind('flex-1 w-full')}>
          {/* ✅ Top button */}
          <View style={[tailwind(' mx-3 my-3')]}>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('MisMatchScreen');
              }}
              style={[
                tailwind('px-6 py-3 mt-6 rounded-2xl bg-primary'),
                { width: width * 0.94 }, // responsive width
              ]}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  tailwind('text-white text-center font-semi'),
                  { fontSize: scaleFont(16) },
                ]}
              >
                Mismatch Items
              </Text>
            </TouchableOpacity> */}
            <ButtonComponent navigation={navigation} naviagte={"MisMatchScreen"}/>
          </View>

          {/* ✅ Scrollable items */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              tailwind('pb-20'),
              { paddingBottom: height * 0.1 }, // responsive bottom padding
            ]}
          >
            {/* Section Title */}
            <Text
              style={[
                tailwind('font-bold mx-5 my-3'),
                { color: '#4F4F4F', fontSize: scaleFont(16) },
              ]}
            >
              Cart Items
            </Text>

            {/* Normal Cart Items */}
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

            {/* Mismatched Section */}
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

          {/* ✅ Spacer */}
          <View style={[tailwind('h-20')]} />

          {/* Bottom Button */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OrderListScreen');
            }}
            style={[
              tailwind('px-6 py-3 mt-6 ml-3 mr-3 rounded-2xl bg-primary'),
              {
                position: 'absolute',
                bottom: height * 0.12, // responsive bottom spacing
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
              SubMit
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
            style={{ height: height * 0.25, width: width * 0.55 }}
            source={assets_manifest?.Car}
            resizeMode="contain"
          />
          <Text style={{ fontSize: scaleFont(14) }}>No Cart Found</Text>
        </View>
      )}
    </View>
  );
}
