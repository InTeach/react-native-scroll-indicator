import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollIndicator from "react-native-scroll-indicator";

export default class App extends React.Component {
  render() {
    return (
      <ScrollIndicator>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </ScrollIndicator>
    );
  }
}

const styles = StyleSheet.create({});
