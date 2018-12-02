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

import {
  createUserCode,
  decodeUserCode,
  compareCourseCodes,
  encodeCourseCode,
  decodeCourseCode
} from "../helpers/encoding";
import EnterCode from "./EnterCode";
import TeamDeew from "../assets/classeswithfriends.png";

export default class Homescreen extends Component {
  state = {
    userCode: "",
    page: "home",
    friendsCode: ""
  };

  enterCodeHandler = () => {
    this.setState({ page: "code" });
  };

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
          if (
            word.description.includes("CIS*") &&
            !classes.includes(word.description)
          ) {
            classes.push(word.description);
          }
        });

        // have array of clases
        const userCode = createUserCode(classes);
        this.setState({ userCode });
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
        const B64Image = response.data;
        this.uploadImage(B64Image);
      }
    });
  };

  updateFriendsCode = text => {
    console.log(text);
    this.setState({ friendsCode: text });
  };

  friendsCodeSubmit = () => {
    const { userCode, friendsCode } = this.state;
    console.log(userCode.toLowerCase(), friendsCode.toLowerCase());
    const arrayOfCourses = compareCourseCodes(
      userCode.toLowerCase(),
      friendsCode.toLowerCase()
    );

    let response;
    if (arrayOfCourses.length > 0) {
      console.log(arrayOfCourses);
      response = arrayOfCourses.toString();
    } else {
      response = "You have no courses together!";
    }
    this.setState({ response });
  };

  render() {
    const userCode = this.state.userCode;
    const { page } = this.state;
    let renderComponent;

    if (page === "home") {
      renderComponent = (
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
                <Text style={styles.userCode}>
                  {userCode && `Your Code is: ${userCode}`}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.addScheduleHandler}
                >
                  <Text style={styles.buttonText}> Add Schedule </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.enterCodeHandler}
                >
                  <Text style={styles.buttonText}> Enter Friend's Code </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      );
    } else if (page === "code") {
      renderComponent = (
        <EnterCode
          codeHandler={this.updateFriendsCode}
          codeVal={this.state.friendsCode}
          onPress={this.friendsCodeSubmit}
          response={this.state.response}
        />
      );
    }

    return <View>{renderComponent}</View>;
  }
}

const styles = StyleSheet.create({
  userCode: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center"
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
