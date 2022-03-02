import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import AppLoading from "expo-app-loading";

const Contact = () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  if (!fontsLoaded){
    <AppLoading/>;
  }
  return (
    <View>
      <Text>Contact</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})