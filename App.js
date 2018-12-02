import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Layout from "./components/Layout";
import UploadPage from "./components/UploadPage";
import Willtesting from "./components/EnterCode";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Layout />
        {/* <UploadPage/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
