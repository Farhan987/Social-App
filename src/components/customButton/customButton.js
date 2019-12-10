import React, { Component } from "react";
import { Button, Text } from "native-base";

class CustomButton extends Component {
  state = {};
  render() {
    return (
      <Button
        onPress={this.props.onPress ? this.props.onPress : text => false}
        style={{
          width: "80%",
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "white",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 50,
          height: 40,
          borderWidth: 1
        }}
      >
        <Text
          style={{
            fontSize: 23,
            alignSelf: "center",
            color: this.props.color ? this.props.color : "#00000"
          }}
        >
          {this.props.Text ? this.props.Text : "Press"}
        </Text>
      </Button>
    );
  }
}

export default CustomButton;
