import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import Style from "../style/pages/AboutPage.js";

const container = Style.container;
const contentContainer = Style.contentContainer;
const imageContainer = Style.imageContainer;

import backgroundImage from "../../assets/background_image.jpg";

export default function AboutPage({ navigation }) {
  function toStartPage() {
    navigation.navigate("StartPage");
  }

  return (
    <View style={container.container}>
      <View style={contentContainer.container}>
        <TouchableOpacity
          style={contentContainer.backContainer}
          onPress={() => toStartPage()}
        >
          <Text style={contentContainer.arrowLeft}>
          </Text>
          <Text style={contentContainer.backText}>
            Terug
          </Text>
        </TouchableOpacity>

        <View style={contentContainer.titleContainer}>
          <Text style={contentContainer.titleTextTop}>Wat is de stemwijzer?</Text>
        </View>
        
        <View style={contentContainer.mainTextContainer}>
          <Text style={contentContainer.mainText}>
            De stemwijzer is een app waarmee u word geholpen om te bepalen welke politiekepartij het beste bij u past.
          </Text>
          <Text style={contentContainer.mainText}>
            Dit word gedaan door een aantal vragen te beantwoorden, nadat u deze vragen heeft beantwoord krijgt u een resultaat terug met politieke partijen die bij u passen.
          </Text>
        </View>

      </View>
      <View style={imageContainer.container}>
        <Image style={imageContainer.image} source={backgroundImage}></Image>
      </View>
    </View>
  );
}
