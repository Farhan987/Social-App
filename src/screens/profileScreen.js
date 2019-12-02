import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button, Icon } from "native-base";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 50 }} />
        <View
          style={{
            height: 170,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../images/image1.jpg")}
            style={{ height: 120, width: 120, borderRadius: 100 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              paddingTop: 5,
              fontSize: 17
            }}
          >
            Sunny Leone
          </Text>
        </View>
        <View
          style={{
            height: 60,
            backgroundColor: "pink",
            width: "90%",
            alignSelf: "center",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "black"
            }}
          >
            Sunny took her stage name, 'Sunny Leone' before she started working
            in the adult industry.
          </Text>
        </View>

        <View
          style={{
            height: 60,
            width: "100%",
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            rounded
            info
            style={{
              width: 200,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center"
            }}
          >
            <Text style={{ color: "white" }}>Edit Profile</Text>
          </Button>
        </View>

        <View style={{ height: 50 }} />
        <View
          style={{
            height: 60,
            width: "90%",
            backgroundColor: "white",
            borderColor: "grey",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <Text note style={{ fontSize: 16, marginLeft: 10 }}>
              Total Posts
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 10 }}>
              545
            </Text>
          </View>
        </View>

        <View style={{ height: 10 }} />
        <View
          style={{
            height: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red"
          }}
        >
          <Button iconLeft>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
