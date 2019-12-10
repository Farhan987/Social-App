import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/authScreens/loginScreen";
import SignupScreen from "../screens/authScreens/signupScreen";
import HomeScreen from "../screens/homeScreen";
import NewsFeedScreen from "../screens/newsFeedScreen";
import PostDetailScreen from "../screens/postDetailScreen";
import ProfileScreen from "../screens/profileScreen";
import EditProfileScreen from "../screens/editProfileScreen";
import CreatePostScreen from "../screens/createPostScreens/stepOne";
import AllMessageScreen from "../screens/messageScreens/allMessageScreen";
import ChatScreen from "../screens/messageScreens/chatScreen";

const AppStackNavigator = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignupScreen: { screen: SignupScreen },
    HomeScreen: { screen: HomeScreen },
    NewsFeedScreen: { screen: NewsFeedScreen },
    PostDetailScreen: { screen: PostDetailScreen },
    ProfileScreen: { screen: ProfileScreen },
    EditProfileScreen: { screen: EditProfileScreen },
    CreatePostScreen: { screen: CreatePostScreen },
    AllMessageScreen: { screen: AllMessageScreen },
    ChatScreen: { screen: ChatScreen }
  },
  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
