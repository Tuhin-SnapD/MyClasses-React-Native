import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import CourseDetails from './src/screens/CourseDetails';
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

export default function App() {
  const Stack = createNativeStackNavigator();
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
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home"
        options={{
          headerShown: false,
        }}>
          {(props) => <Home {...props} companyName={'MyClasses'} />}
        </Stack.Screen>

        <Stack.Screen 
        name="Course" 
        component={Course} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }}/>

        <Stack.Screen 
        name="About" 
        component={About} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }} />

        <Stack.Screen 
        name="Contact" 
        component={Contact} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }} />

        <Stack.Screen 
        name="Profile" 
        component={UserData} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitle: "Profile",
          headerTitleAlign: "center",
        }} />

        <Stack.Screen 
        name="CourseDetails" 
        component={CourseDetails} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
