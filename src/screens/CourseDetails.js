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


const CourseDetails = ({ navigation, route }) => {

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  const id = route.params.courseId
  const selectedCourse = Courses.find((elements) => {
    return id === elements.id
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.mainHeader}>
          {selectedCourse.title}
        </Text>
        <Text style={styles.description}>
          {selectedCourse.course1}
        </Text>
        <Text style={styles.description}>
          {selectedCourse.course2}
        </Text>
        <Text style={styles.description}>
          {selectedCourse.course3}
        </Text>

        <View style={styles.buttonContainer}>
        <Text style={styles.price}>Rs. 
          {selectedCourse.price}
        </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={
              () => navigation.navigate('Course')
            }>
            <Text style={styles.buttonText}>Join Today</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.6,
  },
  mainContainer: {
    paddingHorizontal: 18,
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
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 18,
    fontSize: 16,
    color: "#7d7d7d",
  },
  price:{
    backgroundColor: "#f5f5f5",
    marginBottom:4,
    fontSize: 16

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

export default CourseDetails