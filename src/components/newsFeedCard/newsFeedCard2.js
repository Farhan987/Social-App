import React, { Component } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
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
export default class SecondNewsFeedCard extends Component {
  render() {
    return (
      <View>
        <CardItem
          cardBody
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <ImageBackground
            source={this.props.postImage}
            style={styles.imageStyle}
          >
            <View style={styles.viewStyle}>
              <Left>
                <Icon
                  active
                  name="arrow-back"
                  style={{ color: "white", marginLeft: 20 }}
                />
              </Left>
              <Right>
                <Icon
                  active
                  name="more"
                  style={{ color: "white", marginRight: 20 }}
                />
              </Right>
            </View>
          </ImageBackground>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon
                active
                name="heart"
                style={{ color: "red", marginLeft: "3%" }}
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
    height: 320,
    width: null,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  viewStyle: {
    flexDirection: "row",
    height: 70
  }
});
