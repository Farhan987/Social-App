import React, { Component } from "react";
import { Container, Tab, Tabs, TabHeading, Icon, Text } from "native-base";
import { StyleSheet, View } from "react-native";

import NewsFeedScreen from "./newsFeedScreen";
import PostDetailScreen from "./postDetailScreen";
import ProfileScreen from "./profileScreen";
import AllMessageScreen from "./messageScreens/allMessageScreen";

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Tabs
            tabBarPosition="bottom"
            tabBarUnderlineStyle={{ backgroundColor: "#979797" }}
          >
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="home"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Inicio</Text>
                </TabHeading>
              }
            >
              <NewsFeedScreen navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="heart-o"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Favoritos</Text>
                </TabHeading>
              }
            >
              <PostDetailScreen navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="plus-square-o"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>publicar</Text>
                </TabHeading>
              }
            >
              <ProfileScreen navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="balance-scale"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Comparar</Text>
                </TabHeading>
              }
            >
              <AllMessageScreen navigation={this.props.navigation} />
            </Tab>
            {/* <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="comment-o"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Mensajes</Text>
                </TabHeading>
              }
            >
              <FirstChatScreen navigation={this.props.navigation} />
            </Tab> */}
          </Tabs>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  footerTextStyle: { fontSize: 10, color: "#979797" },
  footerIconStyle: { color: "#979797", fontSize: 20 },
  TabHeading: (style = { flexDirection: "column", backgroundColor: "white" })
});
