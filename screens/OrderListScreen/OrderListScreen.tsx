import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import tailwind from '@tailwind';
import { Topbar } from '@Component';
import { useNavigation } from '@react-navigation/native';
export default function OrderListScreen() {
  const navigation = useNavigation();
  const Data = [
    {
      order_id: 'LAU1234',
      order_status: '1',
      booking_date: '12/12/2025',
      booking_time: '12:12 pm',
    },
    {
      order_id: 'LAU1235',
      order_status: '2',
      booking_date: '18/07/2025',
      booking_time: '11:40 pm',
    },
    {
      order_id: 'LAU1236',
      order_status: '3',
      booking_date: '01/09/2025',
      booking_time: '10:10 pm',
    },
    {
      order_id: 'LAU1236',
      order_status: '3',
      booking_date: '01/09/2025',
      booking_time: '10:10 pm',
    },
    {
      order_id: 'LAU1236',
      order_status: '3',
      booking_date: '01/09/2025',
      booking_time: '10:10 pm',
    },
    {
      order_id: 'LAU1236',
      order_status: '3',
      booking_date: '01/09/2025',
      booking_time: '10:10 pm',
    },
    {
      order_id: 'LAU1238',
      order_status: '3',
      booking_date: '01/09/2025',
      booking_time: '10:10 pm',
    },
  ];
  return (
    <View style={[tailwind('h-full bg-background')]}>
      <Topbar title="Orders List" type={1} />
      <ScrollView>
        {Data?.map((items: any, index: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('SingleOrderScreen');
              }}
              activeOpacity={0.7}
              style={[tailwind('border rounded-xl mx-3 px-3 py-3 my-3 ')]}
              key={index}
            >
              <View style={[tailwind('flex-row')]}>
                <View>
                  <Text  style={[tailwind('font-bold text-gray font-14'),{}]}>Order ID</Text>
                  <Text style={[tailwind('font-bold my-1 font-16')]}>
                    {items?.order_id}
                  </Text>
                </View>
                <View
                  style={[
                    tailwind(''),
                    { marginLeft: 'auto', alignItems: 'flex-end' },
                  ]}
                >
                  <Text style={[tailwind('font-bold text-gray font-14'),{}]}>Order Status</Text>
                  <Text style={[tailwind('font-bold my-1 font-16')]}>
                    {items?.order_status == 1
                      ? 'Placed'
                      : items?.order_status == 2
                      ? 'Accept'
                      : 'ready'}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  tailwind('mt-2 mb-2 '),
                  { height: 2, width: '100%', backgroundColor: 'gray' },
                ]}
              />
              <View style={[tailwind('flex-row')]}>
                <View>
                  <Text style={[tailwind('font-bold text-gray font-14'),{}]}>Booking Date</Text>
                  <Text style={[tailwind('font-bold my-1 font-16')]}>
                    {items?.booking_date}
                  </Text>
                </View>
                <View
                  style={[
                    tailwind(''),
                    { marginLeft: 'auto', alignItems: 'flex-end' },
                  ]}
                >
                  <Text style={[tailwind('font-bold text-gray font-14'),{}]}>Booking Time</Text>
                  <Text style={[tailwind('font-bold my-1 font-16')]}>
                    {items?.booking_time}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
