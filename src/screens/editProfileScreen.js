import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Button, Icon, Container, Item, Input, Textarea } from "native-base";
import CustomHeader from "../components/customHeader/customHeader";
// import ImagePicker from "react-native-image-crop-picker";

export default class EditProfileScreen extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     image: null,
  //     images: null
  //   };
  // }

  // SelectImage = () => {
  //   ImagePicker.openPicker({
  //     width: 200,
  //     height: 100,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //     let imgSource = {
  //       uri: image.path,
  //       type: image.mime,
  //       name: image.path.replace(/^.*[\\\/]/, "")
  //     };
  //     this.setState({ image: imgSource });
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader title="Back" />
        <ScrollView>
          <View
            style={{
              height: 120,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../images/image1.jpg")}
              // source={this.state.image}
              style={{ height: 110, width: 110, borderRadius: 100 }}
            />
          </View>

          <View
            style={{
              height: 40,
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              rounded
              info
              // onPress={() => this.SelectImage()}
              style={{
                width: 150,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
            >
              <Text style={{ color: "white" }}>Upload Picture</Text>
            </Button>
          </View>

          <View style={{ height: 20 }} />
          <View style={styles.textIputTitleStyle}>
            <Text style={{ fontSize: 16 }}>Name</Text>
          </View>

          <View style={{ height: 10 }} />
          <View style={styles.textIputStyle}>
            <Item rounded style={{ height: 40, backgroundColor: "white" }}>
              <Input placeholder="Alexa" />
            </Item>
          </View>

          <View style={{ height: 15 }} />
          <View style={styles.textIputTitleStyle}>
            <Text style={{ fontSize: 16 }}>Status</Text>
          </View>

          <View style={{ height: 10 }} />
          <View style={styles.textAreaStyle}>
            <Textarea
              rowSpan={3}
              bordered
              placeholder="Text here"
              style={{ backgroundColor: "white", borderRadius: 10 }}
            />
          </View>

          <View style={{ height: 15 }} />
          <View style={styles.textIputTitleStyle}>
            <Text style={{ fontSize: 16 }}>Phone Number</Text>
          </View>

          <View style={{ height: 10 }} />
          <View style={styles.textIputStyle}>
            <Item rounded style={{ height: 40, backgroundColor: "white" }}>
              <Input placeholder="03xxxxxxxxx" keyboardType="phone-pad" />
            </Item>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  textIputTitleStyle: {
    height: 25,
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center"
  },
  textIputStyle: {
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  textAreaStyle: {
    height: 82,
    width: "90%",
    alignSelf: "center"
  }
});
