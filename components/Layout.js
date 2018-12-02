import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import ImagePicker from "react-native-image-picker";

import TeamDeew from "../assets/classeswithfriends.png";

export default class Homescreen extends Component {
  uploadImage = base64Image => {
    axios
      .post(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCnPJotszGZhgfp6DCuPzzheStbBaGdHWo",
        {
          requests: [
            {
              image: {
                content: base64Image
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
        let classes = [];
        response.data.responses[0].textAnnotations.map(word => {
          if (word.description.includes('CIS*') && !classes.includes(word.description))
          {
            classes.push(word.description);
          }
       })
       console.log(classes);
      })
      .catch(err => {
        console.log("ERROR:", err.response);
      });
  };

  addScheduleHandler = () => {
    ImagePicker.showImagePicker(null, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        const B64Image = response.data;
        this.uploadImage(B64Image);
      }
    });
  };

  render() {
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
              <TouchableOpacity
                style={styles.button}
                onPress={this.addScheduleHandler}
              >
                <Text style={styles.buttonText}> Add Schedule </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.onPress}>
                <Text style={styles.buttonText}> Enter Friend's Code </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

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
