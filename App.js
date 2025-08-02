import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import Home from './src/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import CourseDetails from './src/screens/CourseDetails';

import { useAppFonts } from './src/config/fonts';
import { HEADER_STYLES } from './src/config/styles';
import { APP_CONFIG } from './src/config/constants';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const screenOptions = {
    ...HEADER_STYLES,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={screenOptions}
      >
        <Stack.Screen 
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} companyName={APP_CONFIG.COMPANY_NAME} />}
        </Stack.Screen>

        <Stack.Screen 
          name="Course" 
          component={Course} 
        />

        <Stack.Screen 
          name="About" 
          component={About} 
        />

        <Stack.Screen 
          name="Contact" 
          component={Contact} 
        />

        <Stack.Screen 
          name="Profile" 
          component={UserData} 
          options={{
            ...screenOptions,
            headerTitle: "Profile",
          }}
        />

        <Stack.Screen 
          name="CourseDetails" 
          component={CourseDetails} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
