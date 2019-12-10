import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Container, Content, Text, Icon } from "native-base";

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ height: 5 }} />
          <View style={styles.userDetailStyle}>
            <View style={styles.backButtonStyle}>
              <TouchableOpacity>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={{ color: "#979797" }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imageViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/profile1.jpg")}
              />
            </View>
            <View style={{ width: 15 }} />
            <View style={styles.nameOuterViewStyle}>
              <View style={styles.upperTextViewStyle}>
                <Text style={styles.upperTextStyle}>Abel Gomez</Text>
              </View>
              <View style={styles.lowerTextViewStyle}>
                <Text style={styles.lowerTextStyle}>En linea</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 20 }} />
          <View style={styles.lineViewStyle} />

          {/* leftSideUser */}
          <View style={{ height: 15 }} />
          <View style={styles.messagesOutterViewStyle}>
            <View style={styles.pictureViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/profile1.jpg")}
              />
            </View>
            <View style={styles.commentOuterViewStyle}>
              <View style={styles.commentViewStyle1}></View>
            </View>
          </View>

          <View style={styles.messagesOutterViewStyle}>
            <View style={styles.pictureViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/profile1.jpg")}
              />
            </View>
            <View style={styles.commentOuterViewStyle}>
              <View style={styles.commentViewStyle2}></View>
            </View>
          </View>
          {/* oppositeUser */}
          <View style={styles.messagesOutterViewStyle}>
            <View style={styles.commentOuterViewStyle2}>
              <View style={styles.commentViewStyle1}></View>
            </View>
            <View style={styles.pictureViewStyle2}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/image2.jpg")}
              />
            </View>
          </View>
          <View style={styles.messagesOutterViewStyle}>
            <View style={styles.commentOuterViewStyle2}>
              <View style={styles.commentViewStyle1}></View>
            </View>
            <View style={styles.pictureViewStyle2}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/image2.jpg")}
              />
            </View>
          </View>

          {/* leftSideUser */}
          <View style={{ height: 15 }} />
          <View style={styles.messagesOutterViewStyle}>
            <View style={styles.pictureViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/profile1.jpg")}
              />
            </View>
            <View style={styles.commentOuterViewStyle}>
              <View style={styles.commentViewStyle1}></View>
            </View>
          </View>

          <View style={styles.messagesOutterViewStyle}>
            <View style={styles.pictureViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require("../../images/profile1.jpg")}
              />
            </View>
            <View style={styles.commentOuterViewStyle}>
              <View style={styles.commentViewStyle2}></View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleViewStyle: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  },

  userDetailStyle: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  imageViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  backButtonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  nameOuterViewStyle: {
    flex: 6
  },
  upperTextViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  upperTextStyle: { fontSize: 16, fontWeight: "bold" },
  lowerTextViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  lowerTextStyle: { fontSize: 12, color: "orange" },
  lineViewStyle: {
    height: 1,
    backgroundColor: "#979797",
    width: "85%",
    alignSelf: "center"
  },
  messagesOutterViewStyle: {
    height: 70,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  pictureViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  commentOuterViewStyle: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  commentViewStyle1: {
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F8F8F8",
    borderRadius: 30
  },
  commentViewStyle2: {
    height: 50,
    width: "55%",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F8F8F8",
    borderRadius: 30
  },
  commentOuterViewStyle2: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  pictureViewStyle2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});
