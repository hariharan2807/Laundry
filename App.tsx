/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import tailwind from '@tailwind';
import RootNavigation from './navigations/RootNavigation';
import React from 'react';
import {
  StatusBar,
  // SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
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

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient();

  return (
    // <View  style={[tailwind('h-full bg-secondary')]}>
    // </View>
    // <SafeAreaProvider>
    <SafeAreaView style={[tailwind('flex-1 bg-primary')]}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
          <RootNavigation />
          {/* </GestureHandlerRootView> */}
        </QueryClientProvider>
        <Toast config={toastConfig} />
      </Provider>
    </SafeAreaView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
