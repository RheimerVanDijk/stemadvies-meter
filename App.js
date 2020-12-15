import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Fonts
import * as Font from "expo-font";
import roboto_regular from "./assets/fonts/Roboto_400Regular.ttf";
import roboto_bold from "./assets/fonts/Roboto_700Bold.ttf";

let customFonts = {
  "roboto-regular": roboto_regular,
  "roboto-bold": roboto_bold,
};

// Pages
import StartPage from "./src/pages/StartPage";
import AboutPage from "./src/pages/AboutPage";

const Stack = createStackNavigator();

export default function App() {
  // Load in fonts
  async function _loadFontsAsync() {
    await Font.loadAsync(customFonts);
  }

  // calls font load function on pageLoad
  useEffect(() => {
    _loadFontsAsync();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="AboutPage" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
