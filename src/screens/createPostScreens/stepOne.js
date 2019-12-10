import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Textarea,
  Icon,
  Button
} from "native-base";
import CustomHeader from "../../components/customHeader/customHeader";
import CustomDropdown from "../../components/dropDown/customDropdown";

export default class CreatePostStepOne extends Component {
  render() {
    return (
      <Container>
        <CustomHeader title="Create Post" showButton />
        <Content>
          <View style={{ height: 20 }} />
          <View
            style={{
              height: 80,
              width: "90%",
              alignSelf: "center",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start"
              }}
            >
              <Image
                source={require("../../images/image1.jpg")}
                style={{ height: 70, width: 70, borderRadius: 100 }}
              />
            </View>
            <View
              style={{
                flex: 3
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Farhan Akram
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CustomDropdown />
              </View>
            </View>
          </View>

          <View style={{ width: "90%", alignSelf: "center" }}>
            <Textarea
              rowSpan={8}
              bordered
              placeholder="What's on your mind?"
              style={{ borderColor: "white" }}
            />
          </View>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "white" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start"
              }}
            >
              <Text style={{ marginLeft: 15 }}>Add to your post</Text>
            </View>
            <Button
              style={{
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <Icon name="file-image-o" type="FontAwesome" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
