import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/homeScreen";
import NewsFeedScreen from "./src/screens/newsFeedScreen";
import NewsFeedCard from "./src/components/newsFeedCard/newsFeedCard";
import PostDetailScreen from "./src/screens/postDetailScreen";
import ProfileScreen from "./src/screens/profileScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
