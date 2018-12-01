import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Layout from "./components/Layout";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Layout />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(89, 110, 129, 1)"
  }
});
