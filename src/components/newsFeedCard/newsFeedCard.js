import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View
} from "native-base";
export default class NewsFeedCard extends Component {
  render() {
    return (
      <View>
        <CardItem>
          <Left>
            <Thumbnail source={this.props.profileImage} />
            <Body>
              <Text style={{ fontWeight: "bold" }}>
                {this.props.profileName
                  ? this.props.profileName
                  : "Farhan Akram"}
              </Text>
            </Body>
          </Left>
          <Right>
            <Icon active name="more" style={{ color: "black" }} />
          </Right>
        </CardItem>
        <CardItem
          cardBody
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image source={this.props.postImage} style={styles.imageStyle} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon
                active
                name="heart"
                style={{ color: "grey", marginLeft: "3%" }}
              />
              <Text style={{ color: "grey" }}>237</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" style={{ color: "grey" }} />
              <Text
                style={{
                  color: "grey",
                  marginRight: "40%"
                }}
              >
                444
              </Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: null,
    borderRadius: 10,
    alignSelf: "center",
    marginRight: 18,
    marginLeft: 18,
    flex: 1
  }
});
