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
import { StatusBar,SafeAreaView, StyleSheet, useColorScheme, View,Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View  style={[tailwind('h-full bg-secondary')]}>
    // </View>
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigation/>
      {/* <Text  style={[tailwind('text-black')]}>hari</Text> */}
    </SafeAreaProvider>
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
