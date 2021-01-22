import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import Style from "../style/pages/ResultPage";

const container = Style.container;
const contentContainer = Style.contentContainer;
const imageContainer = Style.imageContainer;

import backgroundImage from "../../assets/background_image.jpg";

export default function ResultPage({ navigation }) {
  function toStartPage() {
    navigation.navigate("StartPage");
  }

  return (
    <View style={container.container}>
      <View style={contentContainer.container}>
        <View style={contentContainer.titleContainer}>
          <Text style={contentContainer.titleText}>Uw resultaten van de test!</Text>
        </View>
      </View>
      <View style={imageContainer.container}>
        <Image style={imageContainer.image} source={backgroundImage}></Image>
      </View>
    </View>
  );
}
