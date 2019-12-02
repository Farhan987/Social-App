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
import SecondNewsFeedCard from "../components/newsFeedCard/newsFeedCard2";
import CommentsCard from "../commentsCard/comments";

let postImage1 = require("../images/image1.jpg");
let postImage2 = require("../images/image2.jpg");
let profileImage1 = require("../images/profile1.jpg");
let profileImage2 = require("../images/profile2.jpg");

export default class PostDetailScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <SecondNewsFeedCard
            profileImage={profileImage2}
            postImage={postImage2}
          />

          <CommentsCard name="Salman Ashraf" />
          <CommentsCard name="Umair" bgColor="white" />
          <CommentsCard name="Dawood" />
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
