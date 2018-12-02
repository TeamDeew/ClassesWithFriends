import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import axios from "axios";

import TeamDeew from "../assets/TeamDEEW.png";
import RNFS from "react-native-fs";

export default class Homescreen extends Component {
  uploadImage = () => {
    RNFS.readFile("assets/test-ocr.png", "base64").then(res => {
      console.log("RES", res.data).catch(err => console.log(err));
    });

    axios
      .post(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCnPJotszGZhgfp6DCuPzzheStbBaGdHWo",
        {
          requests: [
            {
              image: {
                content: B64STRING
              },
              features: [
                {
                  type: "TEXT_DETECTION"
                }
              ]
            }
          ]
        }
      )
      .then(response => {
        console.log("RESPONSE:", response.data);
      })
      .catch(err => {
        console.log("ERROR:", err.response);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}> Upload Page </Text>
          <Image source={TeamDeew} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.uploadImage}>
            <Text> Upload Class Schedule </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Take a Picture of Class Schedule </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

///*<Text style={styles.title}> Classes with friends </Text>

const styles = StyleSheet.create({
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
    padding: 12.5
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
