import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import TeamDeew from "../assets/classeswithfriends.png";
import LinearGradient from 'react-native-linear-gradient';
import WillTesting from './Willtesting';

export default class Homescreen extends Component {

  state = {
    page: 'home'
  }

  addScheduleHandler = () => {
    this.setState({page: 'schedule'});
  }

  renderComp = () => {
    return
  }

  render() {
    const {page} = this.state;
    let component;
    if(page === 'home') {
      component = <LinearGradient
      start={{x: 1.0, y: 0.25}} end={{x: 0.0, y: 0.75}}
      colors = {['#ff146c','#ff4b2b']}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image source={TeamDeew} style={styles.image} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.addScheduleHandler}>
              <Text style={styles.buttonText}> Add Schedule </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text style={styles.buttonText}> Enter Friend's Code </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </LinearGradient>
    }
    else if(page === 'schedule') {
      component = <WillTesting />
    }

    return (
      <View>
        {component}
      </View>
    );
  }
}

///*<Text style={styles.title}> Classes with friends </Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width
    },
  image: {
    height: 230,
    width: 310,
    padding: 10,
    marginBottom: Dimensions.get("window").height/5,
    marginTop: Dimensions.get("window").height/6

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
    backgroundColor: 'transparent',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: "center",
    padding: 12.5,
  },
  buttonText: {
    //fontWeight: "bold",
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 16
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff"
  }
});
