import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Icon,
  Left,
  Right
} from "native-base";
import NewsFeedCard from "../components/newsFeedCard/newsFeedCard";

let postImage1 = require("../images/image1.jpg");
let postImage2 = require("../images/image2.jpg");
let profileImage1 = require("../images/profile1.jpg");
let profileImage2 = require("../images/profile2.jpg");

export default class NewsFeedScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white", flexDirection: "row" }}>
          <Left style={styles.leftFlexStyle}>
            <Text style={styles.leftFlexTextStyle}>News Feed</Text>
          </Left>
          <Right style={styles.rightFlexStyle}>
            <Icon
              active
              name="search"
              style={{ color: "grey", marginRight: 5 }}
            />
          </Right>
        </Header>
        <Content>
          <NewsFeedCard profileImage={profileImage1} postImage={postImage1} />
          <NewsFeedCard
            profileName="Salman Ashraf"
            profileImage={profileImage2}
            postImage={postImage2}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  leftFlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  leftFlexTextStyle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8
  },
  rightFlexStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});
