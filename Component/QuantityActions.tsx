import assets_manifest from '@assets';
import tailwind from '@tailwind';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  id: string;
  quantity: number;
  variationsdata(): any;
  initiateIncrement(): any;
  initiateDecrement(): any;
  product_status: boolean;
  product_message: any;
  type: number;
  customization: Boolean;
}
export default function QuantityActions(props: PropTypes) {
  const { height, width } = useWindowDimensions();
  // console.log('quantityquantityquantityquantity', props?.quantity);
  if (!props.product_status) {
    return (
      <>
        {props.type == 1 ? (
          <View
            style={[
              tailwind(
                'border border-gray-200 py-1  justify-center bg-white rounded-lg px-1',
              ),
              {
                // marginTop: props.type == 0 ? -20 : 10,
                // marginVertical: props.type != 0 ? 10 : 0,
                width: '48%',
              },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[tailwind(' my-1  font-9 text-gray-500 text-center')]}
            >
              {props.product_message
                ? props.product_message
                : 'Not Available Right Now'}
            </Text>
          </View>
        ) : null}
        {props.type == 2 ? (
          <View
            style={[
              tailwind(
                'border border-gray-200 py-1 my-1 justify-center bg-white rounded-lg px-2 ',
              ),
              {
                // marginTop: props.type == 0 ? -20 : 10,
                height: width / 10,
                // marginVertical: props.type != 0 ? 10 : 0,
                width: '85%',
              },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[tailwind('py-1 font-15 text-gray-500 text-center')]}
            >
              {props.product_message
                ? props.product_message
                : 'Not Available Right Now'}
            </Text>
          </View>
        ) : null}
        {props.type == 3 ? (
          <View
            style={[
              tailwind(
                'border border-gray-200 py-1 px-2 justify-center bg-white rounded-lg mx-2',
              ),
              { height: width / 8, width: width / 4 },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[tailwind('font-semi font-15 ')]}
            >
              {props.product_message
                ? props.product_message
                : 'Not Available Right Now'}
            </Text>
          </View>
        ) : null}
        {props.type != 1 && props.type != 2 && props.type != 3 ? (
          <View
            style={[
              tailwind(
                'border border-gray-200 py-1 my-1 justify-center bg-white rounded-lg px-1',
              ),
              {
                // marginTop: props.type == 0 ? -20 : 10,
                // marginVertical: props.type != 0 ? 10 : 0,
                width: '48%',
              },
            ]}
          >
            <Text style={[tailwind('py-1 font-18 text-gray-500 text-center')]}>
              {props.product_message}
            </Text>
          </View>
        ) : null}
      </>
    );
  }
  if (props.type == 1) {
    return (
      <View style={[{ width: 110 }]}>
        {props.quantity > 0 ? (
          <View
            style={[
              tailwind(
                'flex-row items-center justify-between bg-white rounded-lg px-2 py-1',
              ),
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={props.initiateDecrement}
              style={[
                tailwind('px-2 rounded-xl'),
                { borderColor: '#24661E', borderWidth: 1 },
              ]}
            >
              <Text
                style={[tailwind('font-bold text-lg'), { color: '#5E6C84' }]}
              >
                −
              </Text>
            </TouchableOpacity>
            <Text style={[tailwind('font-bold text-base'), { color: '#000' }]}>
              {props.quantity}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={props.initiateIncrement}
              style={[
                tailwind('px-2 rounded-xl'),
                { borderColor: '#24661E', borderWidth: 1 },
              ]}
            >
              <Text
                style={[tailwind('font-bold text-lg'), { color: '#5E6C84' }]}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.initiateIncrement}
            style={[
              tailwind('py-2 rounded-lg'),
              {
                backgroundColor: '#24661E',
                width: '100%',
                alignItems: 'center',
              },
            ]}
          >
            <Text style={tailwind('font-bold text-white text-sm')}>+ ADD</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  if (props.type == 2) {
    return (
      <View style={[tailwind('w-full px-2')]}>
        <View style={[tailwind(`w-full items-end  rounded-lg bg-white `), {}]}>
          {props.quantity > 0 ? (
            <View
              style={[
                tailwind(`border rounded  my-1 w-full flex-row justify-between
                     border  border-primary rounded-lg`),
                { height: width / 10 },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={props.initiateDecrement}
                style={[
                  tailwind('px-2  justify-center rounded-l '),
                  {
                    width: '40%',
                  },
                ]}
              >
                <Text
                  style={[
                    tailwind('font-bold  font-20 '),
                    { color: '#5E6C84' },
                  ]}
                >
                  -
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={props.variationsdata}
                style={[
                  tailwind('px-2 items-end justify-center rounded-r '),
                  {
                    width: '40%',
                  },
                ]}
              >
                <Text
                  style={[
                    tailwind('font-bold  font-20 '),
                    { color: '#5E6C84' },
                  ]}
                >
                  +
                </Text>
              </TouchableOpacity>
              <View style={[tailwind('absolute self-center'), { left: '45%' }]}>
                <Text
                  style={[
                    tailwind('font-bold my-1 font-15'),
                    { color: '#24661E' },
                  ]}
                >
                  {props?.quantity}
                </Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[tailwind('my-1')]}
              onPress={props.initiateIncrement}
            >
              <Text>+ Add </Text>
            </TouchableOpacity>
          )}
        </View>
        {props.customization ? (
          <Text
            style={[
              tailwind(
                'w-full text-right font-regular my-1 text-gray-600 font-9',
              ),
            ]}
          >
            Customizable
          </Text>
        ) : (
          <Text
            style={[tailwind('w-full font-regular my-1  text-white font-9')]}
          >
            Customizable
          </Text>
        )}
      </View>
    );
  }
  if (props.type == 3) {
    return (
      <View style={[tailwind('px-2 ')]}>
        <View
          style={[
            tailwind(`  bg-white `),
            { height: width / 8, width: width / 4 },
          ]}
        >
          {props.quantity > 0 ? (
            <View
              style={[
                tailwind(
                  ` flex-row items-center justify-between  white-shadow rounded-lg `,
                ),
                { height: width / 8, width: width / 4 },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={props.initiateDecrement}
                style={[
                  tailwind('px-2    rounded-l-lg'),
                  {
                    width: '40%',
                  },
                ]}
              >
                <Text
                  style={[tailwind('font-bold font-20 '), { color: '#5E6C84' }]}
                >
                  -
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={props.variationsdata}
                style={[
                  tailwind('px-2  items-end  rounded-r-lg'),
                  {
                    width: '40%',
                  },
                ]}
              >
                <Text
                  style={[tailwind('font-bold font-20'), { color: '#5E6C84' }]}
                >
                  +
                </Text>
              </TouchableOpacity>
              <View
                style={[tailwind('absolute self-center'), { right: '45%' }]}
              >
                <Text
                  style={[tailwind('font-bold  font-15'), { color: '#24661E' }]}
                >
                  {props?.quantity}
                </Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[tailwind('')]}
              onPress={props.variationsdata}
            >
              <Text>hari</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={[tailwind('w-full px-2')]}>
      <Text>hari</Text>
      <View style={[tailwind(`w-full items-end  rounded-lg bg-white `), {}]}>
        {props.quantity > 0 ? (
          <View
            style={[
              tailwind(
                `flex-row my-1 py-1 w-full items-center justify-between   bg-white  white-shadow rounded`,
              ),
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={props.initiateDecrement}
              style={[
                tailwind('px-2'),
                {
                  borderColor: 'black',
                },
              ]}
            >
              <Text
                style={[tailwind('font-bold font-20 '), { color: '#5E6C84' }]}
              >
                -
              </Text>
            </TouchableOpacity>

            <Text
              style={[tailwind('font-bold my-1 font-15'), { color: '#24661E' }]}
            >
              {props?.quantity}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={props.variationsdata}
              style={[
                tailwind('px-2'),
                {
                  borderColor: 'gray',
                  // paddingHorizontal: 6,
                  // paddingVertical: 6,
                },
              ]}
            >
              <Text
                style={[tailwind('font-bold font-20'), { color: '#5E6C84' }]}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[tailwind('my-1'), { paddingHorizontal: '5%' }]}
            onPress={props.initiateIncrement}
          >
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

QuantityActions.propTypes = {
  quantity: PropTypes.number,
};
