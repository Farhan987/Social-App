import React, { Component } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import {
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  View,
  Icon
} from "native-base";
export default class CommentsCard extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.bgColor ? this.props.bgColor : "#EAEAEA",
          flexDirection: "row",
          height: 100
        }}
      >
        <View
          style={{
            flex: 1.2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Thumbnail
            source={require("../images/profile2.jpg")}
            style={{ height: 60, width: 60, borderRadius: 100 }}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{this.props.name}</Text>
          <Text note>
            Text messaging, or texting, is the act of composing and sending
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ paddingTop: 13 }}>8hrs ago</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
