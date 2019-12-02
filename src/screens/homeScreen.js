import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 70 }} />
        <TouchableOpacity style={styles.upperButton}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            PARTNER UP
          </Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <View style={styles.viewStyle}>
          <View style={styles.buttonsViewStyle}>
            <TouchableOpacity
              style={[styles.buttonsStyle, { backgroundColor: "#00655F" }]}
            >
              <Text style={styles.buttonsTextStyle}>
                INDIVIDUALS AND BUDINESSES
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.buttonsViewStyle, { alignItems: "flex-end" }]}>
            <TouchableOpacity style={styles.buttonsStyle}>
              <Text style={[styles.buttonsTextStyle, { padding: 10 }]}>
                PASSIVE INCOME
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 10 }} />
        <View
          style={{
            height: 200,
            backgroundColor: "#FFC90D",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
            AD
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  upperButton: {
    height: 150,
    backgroundColor: "#00837E",
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  viewStyle: {
    height: 150,
    width: "85%",
    alignSelf: "center",
    flexDirection: "row"
  },
  buttonsViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  buttonsStyle: {
    height: "95%",
    width: "95%",
    backgroundColor: "#00837E",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  }
});
