import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import TeamDeew from "../assets/TeamDEEW.png";

export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}> Classes With Friends! </Text>
          <Image source={TeamDeew} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Add Class Schedule </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Enter Friend's Code </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  image: {
    height: 150,
    width: 150
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
    margin: 10,
    backgroundColor: "rgba(89, 110, 129, 1)",
    alignItems: "center",
    padding: 10,
    borderRadius: 20
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    fontFamily: "Montserrat-ExtraLight"
  }
});
