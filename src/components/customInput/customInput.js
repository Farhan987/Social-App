import React, { Component } from "react";
import { View } from "react-native";
import { Item, Icon, Input, Button } from "native-base";

class CustomTextInput extends Component {
  state = {};
  render() {
    return (
      <Item
        regular
        style={{
          width: this.props.ItemWidth ? this.props.ItemWidth : "70%",
          alignSelf: "center",
          backgroundColor: "white",

          borderRadius: 50,
          height: this.props.Inputheight ? this.props.Inputheight : 50
        }}
      >
        <View style={{ flex: 1 }}>
          {this.props.showIcon ? (
            <Icon
              name={this.props.iconName ? this.props.iconName : "home"}
              type="FontAwesome"
              style={{
                color: this.props.iconColor ? this.props.iconColor : "black",
                alignSelf: "center",
                marginRight: 10,
                fontSize: 20
              }}
            />
          ) : (
            false
          )}
        </View>
        <View style={{ flex: 4 }}>
          <Input
            disabled={this.props.disabled ? this.props.disabled : false}
            secureTextEntry={
              this.props.secureTextEntry ? this.props.secureTextEntry : false
            }
            onChangeText={
              this.props.onChangeText ? this.props.onChangeText : text => false
            }
            placeholder={
              this.props.placeholder ? this.props.placeholder : "Enter"
            }
            defaultValue={
              this.props.defaultValue ? this.props.defaultValue : ""
            }
            style={{ fontSize: 13 }}
            placeholderTextColor="#979797"
          />
        </View>
        {this.props.button ? (
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderWidth: 0
            }}
            onPress={this.props.onPress ? this.props.onPress : false}
          >
            <Icon
              name={"arrow-down"}
              type="FontAwesome"
              style={{
                color: "black",
                alignSelf: "flex-start",
                marginRight: 10,
                fontSize: LARGE
              }}
            />
          </Button>
        ) : (
          false
        )}
      </Item>
    );
  }
}

export default CustomTextInput;
