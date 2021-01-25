import { StyleSheet } from "react-native"

const Style = {
  container: StyleSheet.create({
    container: {
      backgroundColor: "#BEECF9",
      height: "100%",
    },
  }),

  contentContainer: StyleSheet.create({
    container: {
      marginTop: 80,
      height: "70%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 100,
    },

    titleContainer: {
      marginTop: 50,
      marginBottom: 10,
      marginRight: 120,
    },

    titleTextTop: {
      fontSize: 25,
      color: "#025C7E",
      fontFamily: "roboto-regular",
      fontWeight: "bold",
    },

    backContainer: {
      borderBottomColor: "#025C7E",
      textAlign: "left",
      marginTop: 0,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 280,
    },

    backText: {
      fontSize: 20,
      color: "#025C7E",
      fontFamily: "roboto-regular",
    },

    arrowLeft: {
      width: 0,
      height: 0,
      borderTopWidth: 20,
      borderTopColor: "transparent",
      borderBottomWidth: 20,
      borderBottomColor: "transparent",
      borderRightWidth: 20,
      borderRightColor: "#025C7E",
      marginRight: 10,
    },

    mainTextContainer: {
      marginBottom: 80,
    },

    mainText: {
      fontSize: 25,
      color: "#025C7E",
      fontFamily: "roboto-regular",
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 20,
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
}

export default Style
