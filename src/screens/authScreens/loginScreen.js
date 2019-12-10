import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Badge, Icon, Content } from "native-base";
import CustomInput from "../../components/customInput/customInput";
import CustomButton from "../../components/customButton/customButton";
export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 40,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "#0558a8", fontWeight: "bold" }}>
            Sign in
          </Text>
        </View>
        <View style={{ height: 20 }}></View>
        <View style={{ height: 50 }}>
          <CustomInput
            placeholder="Enter User Name"
            iconColor="#0098e4"
            showIcon
            iconName="user-o"
            Inputheight={40}
            ItemWidth={"80%"}
          />
        </View>

        <View style={{ height: 40 }}>
          <CustomInput
            secureTextEntry
            placeholder="Password"
            iconColor="#0098e4"
            showIcon
            iconName="lock"
            Inputheight={40}
            ItemWidth={"80%"}
          />
        </View>
        <View style={{ height: 20 }} />
        <View style={{ height: 40 }}>
          <CustomButton
            onPress={() => this.props.navigation.navigate("HomeScreen")}
            backgroundColor={"#0558a8"}
            color={"white"}
            Text="Login"
          ></CustomButton>
        </View>
        <View style={{ height: 10 }}></View>
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 1,
              paddingRight: 30,

              jutisfyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "gray",
                fontWeight: "bold"
              }}
            >
              or Sign in with
            </Text>
          </View>
          <View style={{ width: 10 }}></View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Badge style={styles.bigBadge}>
                <Icon
                  name="facebook-f"
                  type="FontAwesome"
                  style={{ fontSize: 14, color: "gray" }}
                />
              </Badge>
              <View style={{ width: 15 }} />
            </TouchableOpacity>
            <View style={{ width: 10 }} />
            <TouchableOpacity>
              <Badge style={styles.bigBadge}>
                <Icon
                  name="google"
                  type="FontAwesome"
                  style={{ fontSize: 14, color: "gray" }}
                />
              </Badge>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 100,
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#0558a8",
                fontWeight: "bold",
                alignSelf: "center"
              }}
            >
              I am new here, I need an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "white"
  },
  bigBadge: {
    height: 35,
    width: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1
  },
  bigBadgeText: {
    alignSelf: "center",
    fontSize: 12,
    color: "#e94046"
  }
});
