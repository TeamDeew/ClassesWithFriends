import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import TeamDeew from "../assets/TeamDEEW.png";
import LinearGradient from 'react-native-linear-gradient';

export default class Homescreen extends Component {
  render() {
    return (
      <LinearGradient colors = {['#ff146c','#ff4b2b']} /*style = {styles.angled}*/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}> Classes with friends </Text>
          <Image source={TeamDeew} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Add Cladsfgsdfgfsdg ss Schedule </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Enter Friend's Code </Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width
    },
  angled:{
    //useAngle: true, angle: 45, angleCenter: { x: 0.5, y: 0.5} 
    
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
    backgroundColor: "rgba(151, 213,200, 1)",
    alignItems: "center",
    padding: 10,
    borderRadius: 20
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff"
  }
});
