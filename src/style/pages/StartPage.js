import { StyleSheet } from "react-native";

const Style = {
  container: StyleSheet.create({
    container: {
      backgroundColor: "#BEECF9",
      height: "100%",
      paddingTop: 50,
    },
  }),

  contentContainer: StyleSheet.create({
    container: {
      height: "70%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 100,
    },

    titleContainer: {
      borderBottomColor: "#025C7E",
      borderBottomWidth: 3,
      marginBottom: 10,
    },

    titleTextTop: {
      fontSize: 14,
      color: "#025C7E",
      fontFamily: "roboto-regular",
    },

    titleTextBottom: {
      fontSize: 40,
      color: "#025C7E",
      fontFamily: "roboto-bold",
    },

    helpContainer: {
      borderBottomColor: "#025C7E",
      borderBottomWidth: 1,
      textAlign: "center",
      marginBottom: 100,
    },

    helpText: {
      fontSize: 14,
      color: "#025C7E",
      fontFamily: "roboto-regular",
    },

    startTextContainer: {
      marginBottom: 100,
    },

    startText: {
      fontSize: 17,
      color: "#025C7E",
      fontFamily: "roboto-regular",
    },

    startButtonCotainer: {},

    startButton: {
      width: 200,
      height: 50,
      backgroundColor: "#025C7E",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    startButtonText: {
      fontFamily: "roboto-bold",
      color: "#ffffff",
      fontSize: 22,
    },
  }),

  imageContainer: StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      left: 0,
      justifyContent: "center",
      alignItems: "center",
    },

    image: {
      width: "100%",
      height: undefined,
      aspectRatio: 1.3,
    },
  }),
};

export default Style;
