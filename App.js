import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Layout from "./components/Layout";
import UploadPage from "./components/UploadPage";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Layout /> */}
        <Layout/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(151, 213,200, 1)"
    
  }
});
