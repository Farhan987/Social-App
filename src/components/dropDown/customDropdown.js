import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Picker, Item } from "native-base";

export default class CustomDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Item
        regular
        style={{
          borderColor: "white",
          borderRadius: 8,
          height: this.props.Inputheight ? this.props.Inputheight : 30,
          width: this.props.width ? this.props.width : "40%",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "flex-start",
          backgroundColor: "#F6F6F6",
          borderColor: "#EAEAEA",
          borderWidth: 1
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: this.props.marginLeft ? this.props.marginLeft : 0
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
              color: this.props.placeholderColor
                ? this.props.placeholderColor
                : "black"
            }}
          >
            {this.props.title ? this.props.title : ""}
          </Text>
        </View>
        <View style={{ flex: 29 }}>
          <Picker
            placeholder={this.props.title ? this.props.title : ""}
            mode="dropdown"
            iosHeader="Sort By"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Public" value="key0" />
            <Picker.Item label="Friends" value="key1" />
            <Picker.Item label="Only me" value="key2" />
          </Picker>
        </View>
      </Item>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
