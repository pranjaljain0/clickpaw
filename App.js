import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


export default function App() {

  let [fontsLoaded] = useFonts({
    'ProductSans': require('./assets/fonts/ProductSans.ttf'),
    'ProductSansBold': require('./assets/fonts/ProductSansBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
      <Home/>
  );
  }
}

const styles = StyleSheet.create({});
