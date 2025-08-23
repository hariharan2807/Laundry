import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import tailwind from '@tailwind';
import { Topbar } from '@Component';
import assets from '@assets';
import Modal from 'react-native-modal';
import assets_manifest from '@assets';

export default function SingleOrderScreen() {
  const { width, height } = Dimensions.get('window');
  const [visible, setVisible] = useState(false);
  const [rs, setRs] = useState('');

  const Data1 = [
    { name: 'Accessories', id: '1' },
    { name: 'Rs', id: '2' },
  ];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const Data = {
    order_id: 'LAU1234',
    order_status: '5',
    booking_date: '12/12/2025',
    booking_time: '12:12 pm',
    Items: [
      {
        image: 'https://m.media-amazon.com/images/I/716sdEm10ML._SY879_.jpg',
        mismatch_id: null,
        product_id: 2,
        product_name: 'Dry',
        quantity: 1,
        type: 1,
        uuid: 2,
      },
      {
        image: 'https://m.media-amazon.com/images/I/61Y5LDU5O5L._SX679_.jpg',
        mismatch_id: null,
        product_id: 3,
        product_name: 'Cleaning',
        quantity: 1,
        type: 1,
        uuid: 3,
      },
      {
        image: 'https://m.media-amazon.com/images/I/81dYEkq+25L._SY879_.jpg',
        mismatch_id: '12',
        product_id: 1,
        product_name: 'Wash',
        quantity: 1,
        type: 2,
        uuid: 1,
      },
      {
        image: 'https://m.media-amazon.com/images/I/716sdEm10ML._SY879_.jpg',
        mismatch_id: '12',
        product_id: 2,
        product_name: 'Dry',
        quantity: 1,
        type: 2,
        uuid: 2,
      },
    ],
  };
  const mismatchedItems = Data.Items?.filter((item: any) => item?.type === 2);

  // Step 2: Group by mismatch_id
  const groupedByMismatchId = mismatchedItems.reduce((acc: any, item: any) => {
    if (!acc[item.mismatch_id]) {
      acc[item.mismatch_id] = [];
    }
    acc[item.mismatch_id].push(item);
    return acc;
  }, {});
  const Status = (props: any) => {
    return (
      <View style={[tailwind('flex flex-col')]}>
        <View style={[tailwind('flex flex-row items-center')]}>
          {props.status ? (
            <Image
              resizeMode="contain"
              source={assets.ic_placed}
              style={[tailwind(''), { width: 40, height: 40 }]}
            />
          ) : (
            <Image
              resizeMode="contain"
              source={props.image}
              style={[tailwind(''), { width: 40, height: 40 }]}
            />
          )}
          <Text
            style={[
              tailwind(
                `font-medium pl-3 text-brown font-14 ${
                  props.status ? 'text-brown' : 'text-gray-700'
                }`,
              ),
            ]}
          >
            {props.text}
          </Text>
        </View>
        {props.last ? null : (
          <>
            <Text
              style={[tailwind('font-bold text-gray-400 font-8'), { left: 20 }]}
            >
              |
            </Text>
            <Text
              style={[
                tailwind('font-bold text-gray-400 font-8'),
                { left: 20, paddingBottom: 3 },
              ]}
            >
              |
            </Text>
          </>
        )}
      </View>
    );
  };
  return (
    <View style={[tailwind('h-full bg-background')]}>
      <Topbar title="Order Status" type={1} />
      <ScrollView>
        <View style={[tailwind('flex-row mx-3 mt-3')]}>
          <View>
            <Text>Order ID</Text>
            <Text style={[tailwind('font-bold my-1 font-16')]}>
              {Data?.order_id}
            </Text>
          </View>
          <View
            style={[
              tailwind(''),
              { marginLeft: 'auto', alignItems: 'flex-end' },
            ]}
          >
            <Text>Date & Time</Text>
            <Text style={[tailwind('font-bold my-1 font-16')]}>
              {Data?.booking_date} - {Data?.booking_time}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
            //   navigation.navigate('OrderListScreen');
          }}
          style={[
            tailwind('px-6 py-3 mt-6 ml-3 mr-3 rounded-2xl bg-primary'),
            {
              // position: 'absolute',
              // bottom: height * 0.12, // responsive bottom spacing
              width: width * 0.94,
            },
          ]}
          activeOpacity={0.8}
        >
          <Text
            style={[
              tailwind('text-white text-center font-semi'),
              { fontSize: 16 },
            ]}
          >
            Missed Item
          </Text>
        </TouchableOpacity>
        <View style={[tailwind('mt-5')]}>
          <Text style={[tailwind('font-bold my-1 font-16 mx-3 my-3')]}>
            Order Status
          </Text>
        </View>
        <View style={[tailwind('my-2 mx-4')]}>
          {Data?.order_status === '1' ? (
            <Status image={assets.fail} status={false} text="Order Hold" />
          ) : null}
          {Data.order_status === '1' ? null : (
            <Status
              image={assets.is_success}
              status={Data.order_status >= '2'}
              text="Order Placed"
            />
          )}
          {Data.order_status === '0' ? (
            <Status image={assets.fail} status={false} text="Order Cancelled" />
          ) : null}

          <Status
            image={assets.is_restaurant}
            status={Data.order_status >= '3'}
            text="Order Accepted"
          />

          <Status
            image={assets.is_delivered}
            status={Data.order_status >= '5'}
            last={true}
            text="Order Delivered Successfully!"
          />
        </View>
        <Text
          style={[
            tailwind('font-bold mx-5 my-3'),
            { color: '#4F4F4F', fontSize: 16 },
          ]}
        >
          Your Items
        </Text>
        {Data?.Items.filter((item: any) => item?.type === 1).map(
          (ite: any, index: number) => {
            return (
              <View
                key={index}
                style={[
                  tailwind(
                    'flex-row items-center rounded-xl bg-white shadow p-3 mx-3 mb-3',
                  ),
                ]}
              >
                {/* Product Image */}
                <Image
                  style={{ height: 70, width: 70, borderRadius: 10 }}
                  source={{ uri: ite?.image }}
                  resizeMode="cover"
                />

                {/* Product Details */}
                <View style={tailwind('flex-1 ml-4')}>
                  <Text style={tailwind('font-bold text-gray-800 text-base')}>
                    {ite?.product_name}
                  </Text>
                  <Text style={tailwind('text-gray-500 mt-1')}>
                    Qty: {ite?.quantity}
                  </Text>
                </View>

                {/* Quantity or Action Section */}
                <View style={tailwind('flex-row items-center')}>
                  <Text style={tailwind('text-base font-bold text-gray-700')}>
                    {ite?.quantity}
                  </Text>
                </View>
              </View>
            );
          },
        )}

        {Object.keys(groupedByMismatchId).map(mismatchId => (
          <View key={mismatchId}>
            <Text
              style={[
                tailwind('font-bold mx-5 my-3'),
                { color: '#4F4F4F', fontSize: 16 },
              ]}
            >
              Mismatched Items (ID: {mismatchId})
            </Text>
            {groupedByMismatchId[mismatchId].map((ite: any, index: number) => (
              <View
                key={index}
                style={[
                  tailwind(
                    'flex-row items-center rounded-xl bg-white shadow p-3 mx-3 mb-3',
                  ),
                ]}
              >
                {/* Product Image */}
                <Image
                  style={{ height: 70, width: 70, borderRadius: 10 }}
                  source={{ uri: ite?.image }}
                  resizeMode="cover"
                />

                {/* Product Details */}
                <View style={tailwind('flex-1 ml-4')}>
                  <Text style={tailwind('font-bold text-gray-800 text-base')}>
                    {ite?.product_name}
                  </Text>
                  <Text style={tailwind('text-gray-500 mt-1')}>
                    Qty: {ite?.quantity}
                  </Text>
                </View>

                {/* Quantity or Action Section */}
                <View style={tailwind('flex-row items-center')}>
                  <Text style={tailwind('text-base font-bold text-gray-700')}>
                    {ite?.quantity}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <Modal
        isVisible={visible}
        animationInTiming={150}
        animationOutTiming={150}
        onBackdropPress={() => setVisible(true)}
      >
        <View style={[tailwind('bg-white pb-5 px-5 py-5 rounded-xl')]}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={[tailwind('mb-5'), { marginLeft: 'auto' }]}
          >
            <Image
              style={[tailwind(''), { height: 30, width: 30 }]}
              source={require('../../assets/icons/common/cross.png')}
            />
          </TouchableOpacity>
          <View
            style={[
              tailwind('flex-row flex-wrap'),
              { justifyContent: 'space-between' },
            ]}
          >
            {Data1?.map((item: any, index: number) => {
              const isSelected = selectedId === item.id;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedId(item.id)}
                  style={[
                    tailwind('py-3 px-3 rounded-lg mb-3'),
                    {
                      width: '48%',
                      borderWidth: isSelected ? 2 : 1,
                      borderColor: isSelected ? 'green' : '#E0E0E0',
                      backgroundColor: isSelected ? '#E8F5E9' : '#F9F9F9',
                    },
                  ]}
                >
                  <Text
                    style={[
                      tailwind('text-center font-medium'),
                      { color: isSelected ? 'green' : '#333' },
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {
            selectedId==='2'&&<View>
            <TextInput
              onChangeText={txt => {
                setRs(txt);
              }}
              value={rs}
              style={[tailwind('mx-3 my-3 border rounded-xl py-3 px-3'), {borderColor:"#E0E0E0"}]}
              placeholder="Enter Your Amount"
            />
          </View>
          }
           <TouchableOpacity
          onPress={() => {
            setVisible(false);
            //   navigation.navigate('OrderListScreen');
          }}
          style={[
            tailwind('px-6 py-3 mt-6 ml-3 mr-3 rounded-2xl bg-primary'),
            {
              // position: 'absolute',
              // bottom: height * 0.12, // responsive bottom spacing
            },
          ]}
          activeOpacity={0.8}
        >
          <Text
            style={[
              tailwind('text-white text-center font-semi'),
              { fontSize: 16 },
            ]}
          >
            SUBMIT
          </Text>
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
