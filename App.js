import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Layout from "./components/Layout";
import UploadPage from "./components/UploadPage";

export default class App extends Component {
  render() {
    return (
      //<LinearGradient colors = {['#ff146c','#ff4b2b']}>
      <View style={styles.container}>
        {/* <Layout /> */}
        <UploadPage />
      </View>
      //</LinearGradient>
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
