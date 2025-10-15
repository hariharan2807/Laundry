/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import tailwind from '@tailwind';
import RootNavigation from './navigations/RootNavigation';
import React, { useEffect, useRef, useState } from 'react';
import {
  StatusBar,
  // SafeAreaView,
  StyleSheet,
  // useColorScheme,
  View,
  Text,
  Alert,
  BackHandler,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store';
import Toast from 'react-native-toast-message';
import { toastConfig } from './constants/toastConfig';
import { ThemeProvider } from './screens/context/ThemeContext';
import ReactNativeBiometrics from 'react-native-biometrics';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNRestart from 'react-native-restart';
import NetInfo from '@react-native-community/netinfo';

function App() {
  const queryClient = new QueryClient();
  const [loading, setLoading] = useState(true);
  const navigationRef = useRef(null);
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setOffline(false);
      } else {
        setOffline(true);
      }
    });
  }, [NetInfo]);
  // useEffect(() => {
  //   const rnBiometrics = new ReactNativeBiometrics();

  //   const checkBiometrics = async () => {
  //     try {
  //       const { available, biometryType } =
  //         await rnBiometrics.isSensorAvailable();
  //       console.log('Available:', available);
  //       console.log('Biometry type:', biometryType);
  //       // if (!available) {
  //       //   Alert.alert('Biometric not supported on this device', '', [
  //       //     { text: 'OK', onPress: () => BackHandler.exitApp() },
  //       //   ]);
  //       //   return;
  //       // }

  //       const { success } = await rnBiometrics.simplePrompt({
  //         promptMessage: 'Confirm your identity',
  //       });

  //       if (success) {
  //         console.log('Biometric authentication successful!');
  //         setLoading(false); // allow app to show RootNavigation
  //       } else {
  //         setLoading(false); // allow app to show RootNavigation

  //         // Alert.alert('Authentication cancelled', 'App will close now', [
  //         //   { text: 'OK', onPress: () => BackHandler.exitApp() },
  //         // ]);
  //       }
  //     } catch (error) {
  //       setLoading(false)
  //       // Alert.alert('Biometric authentication failed', error.message, [
  //       //   { text: 'OK', onPress: () => BackHandler.exitApp() },
  //       // ]);
  //     }
  //   };

  //   checkBiometrics();
  // }, []);
  // if (loading) {
  //   // Show splash/loading while biometric check happens
  //   return (
  //     <SafeAreaView
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: '#000',
  //       }}
  //     >
  //       <ActivityIndicator size="large" color="#00FFAA" />
  //     </SafeAreaView>
  //   );
  // }
  const appRestart = async () => {
    RNRestart.Restart();
  };
  const openSettings = async () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };
  return (
    <SafeAreaView style={[tailwind('flex-1')]} ref={navigationRef}>
      <Provider store={store}>
        {offline ? (
          <View style={tailwind('bg-white h-full flex-col justify-between ')}>
            <View style={[tailwind('flex-row justify-end items-center p-3')]}>
              <Text style={[tailwind('font-regular text-right font-17 mt-12')]}>
                No Internet
              </Text>
            </View>

            <View style={[tailwind('')]}>
              <Icon
                name="cloud-offline-outline"
                style={[tailwind('text-center')]}
                color="black"
                size={100}
              />
              <Text style={[tailwind('font-regular font-20 text-center')]}>
                No Internet
              </Text>
            </View>
            <View style={[tailwind('py-4')]}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={appRestart}
                style={[
                  tailwind(
                    'bg-primary m-3 p-3 rounded flex-row justify-center items-center',
                  ),
                ]}
              >
                <Icon name="refresh-outline" color="white" size={20} />
                <Text
                  style={[
                    tailwind(
                      'font-regular text-white text-center px-3 uppercase font-15',
                    ),
                  ]}
                >
                  Try Again
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={openSettings}
                style={[
                  tailwind(
                    'bg-secondary m-3 p-3 rounded flex-row items-center justify-center',
                  ),
                ]}
              >
                <Icon name="cog-outline" color="white" size={20} />
                <Text
                  style={[
                    tailwind(
                      'font-regular text-white text-center px-3 uppercase font-15',
                    ),
                  ]}
                >
                  Open Settings
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <QueryClientProvider client={queryClient}>
              {/* <NavigationContainer ref={navigationRef}> */}
              <RootNavigation />
              {/* </NavigationContainer> */}
            </QueryClientProvider>
            <Toast config={toastConfig} />
          </>
        )}
      </Provider>
    </SafeAreaView>
  );
}
export default App;
