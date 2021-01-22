import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import Style from "../style/pages/StartPage";

const container = Style.container;
const contentContainer = Style.contentContainer;
const imageContainer = Style.imageContainer;

import backgroundImage from "../../assets/background_image.jpg";

export default function StartPage({ navigation }) {
  function toAboutPage() {
    navigation.navigate("AboutPage");
  }

  return (
    <View style={container.container}>
      <View style={contentContainer.container}>
        <View style={contentContainer.titleContainer}>
          <Text style={contentContainer.titleTextTop}>Welkom bij de</Text>
          <Text style={contentContainer.titleTextBottom}>Stemwijzer</Text>
        </View>
        <TouchableOpacity
          style={contentContainer.helpContainer}
          onPress={() => toAboutPage()}
        >
          <Text style={contentContainer.helpText}>
            Meer weten over de stemwijzer? Klik hier!
          </Text>
        </TouchableOpacity>
        <View style={contentContainer.startTextContainer}>
          <Text style={contentContainer.startText}>
            Klik op start om de test te beginnen
          </Text>
        </View>
        <View style={contentContainer.startButtonCotainer}>
          <TouchableOpacity style={contentContainer.startButton}>
            <Text style={contentContainer.startButtonText}>Start de test!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={imageContainer.container}>
        <Image style={imageContainer.image} source={backgroundImage}></Image>
      </View>
    </View>
  );
}
