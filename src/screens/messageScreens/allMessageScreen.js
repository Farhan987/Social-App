import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Icon,
  Left,
  Right,
  Card
} from "native-base";
import CommentsCard from "../../components/commentsCard/comments";

export default class AllMessageScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white", flexDirection: "row" }}>
          <Left style={styles.leftFlexStyle}>
            <Text style={styles.leftFlexTextStyle}>All Messages</Text>
          </Left>
          <Right style={styles.rightFlexStyle}>
            <Icon
              active
              name="search"
              style={{ color: "grey", marginRight: 5 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 10 }} />
          <Card
            style={{
              width: "95%",
              borderRadius: 10,
              alignSelf: "center"
            }}
          >
            <CommentsCard
              name="Salman Ashraf"
              bgColor="white"
              time="now"
              height={70}
              width={70}
            />

            <CommentsCard
              name="Dawood Saddique"
              bgColor="white"
              time="18 nov"
              height={70}
              width={70}
            />
            <CommentsCard
              name="Ata"
              bgColor="white"
              time="yesterday"
              height={70}
              width={70}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  leftFlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  leftFlexTextStyle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8
  },
  rightFlexStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});
