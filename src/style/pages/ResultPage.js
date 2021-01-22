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
      marginBottom: 400,
      marginRight: 50,
    },

    titleText: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#025C7E",
      fontFamily: "roboto-regular",
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
