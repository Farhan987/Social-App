import React, { Component } from "react";
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "white" }}>
        <Left>
          <Button transparent>
            <Icon
              name="chevron-left"
              type="FontAwesome"
              style={{ color: "black", fontSize: 15 }}
            />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "black" }}>{this.props.title}</Title>
        </Body>
        {this.props.showButton ? (
          <Right>
            <Button
              style={{
                height: 30,
                width: 75,
                borderRadius: 5,
                backgroundColor: "#D1D1D1",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Post</Text>
            </Button>
          </Right>
        ) : (
          false
        )}
      </Header>
    );
  }
}
