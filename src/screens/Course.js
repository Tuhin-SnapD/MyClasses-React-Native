import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../api/Courseapi";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

const Course = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  if (!fontsLoaded){
    <AppLoading/>;
  }
  const courseCard = ({ item }) => {

    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={
                () => navigation.navigate('CourseDetails',
              {
                courseId : item.id,
              })
              }>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.6,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textAlign: "center",
    paddingBottom: 15,
    fontFamily: "Nunito_600SemiBold",
    // fontWeight:500,
  },
  description: {
    textAlign: "left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 18,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#eeeeee",
    fontFamily: "JosefinSans_500Medium"
  },

});

export default Course

