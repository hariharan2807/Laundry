import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import tailwind from '@tailwind';
import { GlobalDialogModal, Topbar } from '@Component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import assets_manifest from '@assets';
import {
  Logout,
  MyOrderIcon,
  OrderStatusIcon,
  RightIcon,
} from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const log = console.log;

export default function UserProfileScreen() {
  const navigation = useNavigation();
  const [logoutModal, setLogoutModal] = useState(false);
  const [deactivityModal, setDeactivityModal] = useState(false);

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  const logout = async () => {
    setLogoutModal(false);
    // await removeTaxiToken();
    // await removePersistedUser();
    // await removeToken();
    // await removeuserInfo();
    // dispatch(saveJWTTokenAction(null));
    // dispatch(saveUser(null));
    // dispatch(updateSelectedAddressAction(null));
    // dispatch(SaveWalletAction(null));
    // dispatch(updateCart([]));
    // dispatch(saveAddresses([]));
    // RNRestart.Restart();

    // resetToInitialScreen(CommonActions,navigation)
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [
    //       {
    //         name: 'InitialScreen',
    //       },
    //     ],
    //   }),
    // );
  };
  const deactivateAction = async () => {
    setDeactivityModal(false);
    // const deactivateRemote = await getDeactivateRemote();
    // if (deactivateRemote) {
    //   await removePersistedUser();
    //   await removeToken();
    //   await removeNotification();
    //   dispatch(saveJWTTokenAction(null));
    //   dispatch(saveUser(null));
    //   dispatch(updateSelectedAddressAction(null));
    //   dispatch(SaveWalletAction(null));
    //   dispatch(updateCart([]));
    //   dispatch(saveAddresses([]));
    //   navigation.dispatch(
    //     CommonActions.reset({
    //       index: 0,
    //       routes: [
    //         {
    //           name: 'InitialScreen',
    //         },
    //       ],
    //     }),
    //   );
    // } else {
    //   setDeactivateModal(false);
    //   errorBox('Please Try Again Later');
    // }
  };
  return (
    <View style={tailwind('bg-background h-full')}>
      <Topbar title="Account" type={1} />
      <ScrollView style={tailwind('flex-1 bg-gray-50')}>
        <View style={[tailwind('bg-white rounded-2xl mx-4 mt-16 shadow p-5')]}>
          <View style={{ alignItems: 'center', marginTop: -60 }}>
            <Image
              source={assets_manifest?.LogoNew}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: '#fff',
              }}
            />
          </View>
          <View style={[tailwind('items-center mt-4')]}>
            <Text style={tailwind('text-xl font-bold text-black')}>
              User Name
            </Text>
            <Text style={tailwind('text-gray-500 mt-1 font-semi')}>
              +91 1234567890
            </Text>
          </View>
          <View style={tailwind('mt-6')}>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('OrderListScreen');
              }}
              style={[
                tailwind(
                  'flex-row items-center justify-between rounded-xl px-4 py-4 mb-3',
                ),
                {
                  backgroundColor: '#F8F8F8',
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                },
              ]}
            >
              <View style={tailwind('flex-row items-center')}>
                <OrderStatusIcon />
                <Text style={tailwind('ml-3 font-semi text-black')}>
                  Order Status
                </Text>
              </View>
              <RightIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('OrderListScreen');
              }}
              style={[
                tailwind(
                  'flex-row items-center justify-between rounded-xl px-4 py-4',
                ),
                {
                  backgroundColor: '#F8F8F8',
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                },
              ]}
            >
              <View style={tailwind('flex-row items-center')}>
                <MyOrderIcon />
                <Text style={tailwind('ml-3 font-semi text-black')}>
                  My Orders
                </Text>
              </View>
              <RightIcon />
            </TouchableOpacity>
          </View>
          <View style={tailwind('mt-6')}>
            <TouchableOpacity
              onPress={() =>
                openLink('https://www.google.com/?zx=1759561219565&no_sw_cr=1')
              }
            >
              <Text style={tailwind('text-gray-600 mb-3 font-medium')}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink('https://www.google.com/?zx=1759561219565&no_sw_cr=1')
              }
            >
              <Text style={tailwind('text-gray-600 mb-3 font-medium')}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink('https://www.google.com/?zx=1759561219565&no_sw_cr=1')
              }
            >
              <Text style={tailwind('text-gray-600 mb-3 font-medium')}>
                About us
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind('mt-6')}>
            <TouchableOpacity
              onPress={() => {
                setLogoutModal(true);
              }}
              style={tailwind('flex-row items-center mb-3')}
            >
              <Logout />
              <Text style={tailwind('ml-2 text-red-600 font-semi')}>
                Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind('flex-row items-center')}
              onPress={() => {
                setDeactivityModal(true);
              }}
            >
              <Logout />
              <Text style={tailwind('ml-2 text-red-600 font-semi')}>
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <GlobalDialogModal
        target={1}
        title="Do you want to Logout from the Application ?"
        visible={logoutModal}
        setAlertModal={setLogoutModal}
        action={logout}
      />
      <GlobalDialogModal
        target={1}
        title="Do you want to Delete the Ilo Account ?"
        visible={deactivityModal}
        setAlertModal={setDeactivityModal}
        action={deactivateAction}
      />
    </View>
  );
}
