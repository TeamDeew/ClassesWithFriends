import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput
} from "react-native";
import TeamDeew from "../assets/classeswithfriends.png";
import LinearGradient from "react-native-linear-gradient";

export const EnterCode = props => {
  return (
    <LinearGradient
      start={{ x: 1.0, y: 0.25 }}
      end={{ x: 0.0, y: 0.75 }}
      colors={["#ff146c", "#ff4b2b"]}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image source={TeamDeew} style={styles.image} />
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.resText}>
              {props.response &&
                `You have the following courses: ${props.response} !`}
            </Text>
            <TextInput
              style={styles.button}
              onChangeText={text => props.codeHandler(text)}
              value={props.codeVal}
            >
              {" "}
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={props.onPress}>
              <Text style={styles.buttonText}> Enter Code </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  resText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  image: {
    height: 230,
    width: 310,
    padding: 10,
    marginBottom: Dimensions.get("window").height / 5,
    marginTop: Dimensions.get("window").height / 6
  },
  topContainer: {
    //flex: 1,
    //marginTop: 100,
    //justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    //flex: 1,
    //justifyContent: "center"
    //paddingHorizontal: 10
  },
  button: {
    margin: 15,
    backgroundColor: "transparent",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    padding: 12.5,
    color: "white",
    fontFamily: "Avenir",
    fontSize: 16
  },
  buttonText: {
    //fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir",
    fontSize: 16
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff"
  }
});
