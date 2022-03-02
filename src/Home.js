import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'
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


const Home = (props) => {
  const description1 = "MyClasses, One of the world's best-known online learning resources, We have several thousand courses from leading educational providers."
  const description2 = "Feel free to browse MyApp - Developed by Tuhin Chakrabarty. This is his first React-Native application "
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
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage} resizeMode="contain" source={require("./../assets/logo.jpg")} />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={styles.mainHeader, {
          fontSize: 25,
          color: "#4c5dab",
          marginTop: 0
        }}>{props.companyName}</Text>
        <Text style={styles.paraStyle}>{description1}</Text>
        <Text style={styles.paraStyle}>{description2}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle,
        {
          marginVertical: 10,
        },
        ]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1.2,
    display: "flex",
    marginTop: 50,
    borderRadius: 15
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    fontFamily: "Nunito_600SemiBold",
    marginTop:20,
    // textTransform: "uppercase"
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "#7d7d7d",
    paddingTop: 20,
    // paddingBottom: 50,
    lineHeight: 22,
    paddingHorizontal:30,
    fontFamily: "JosefinSans_400Regular",
  },
  lineStyle: {
    marginBottom:10,
    borderWidth: 0.7,
    borderBottomColor:"grey",
  }
});

export default Home

