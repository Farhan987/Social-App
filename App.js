import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
// import HomeScreen from "./src/screens/homeScreen";
// import NewsFeedScreen from "./src/screens/newsFeedScreen";
// import NewsFeedCard from "./src/components/newsFeedCard/newsFeedCard";
// import PostDetailScreen from "./src/screens/postDetailScreen";
// import ProfileScreen from "./src/screens/profileScreen";
// import EditProfileScreen from "./src/screens/editProfileScreen";
// import AllMessageScreen from "./src/screens/messageScreens/allMessageScreen";
// import ChatScreen from "./src/screens/messageScreens/chatScreen";
// import CreatePostStepOne from "./src/screens/createPostScreens/stepOne";
// import LoginScreen from "./src/screens/authScreens/loginScreen";
// import SignUpScreen from "./src/screens/authScreens/signupScreen";
import AppContainer from "./src/navigation/navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
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
