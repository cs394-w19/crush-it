import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Colors from "../constants/Colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Tooltip } from "react-native-elements";

import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

import quiz_categories from "../assets/quiz_categories";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    // some stuff for gathering the topics (i.e. reading json or firebase calls)
    this.state = {
      points: this.props.navigation.getParam("points", 0),
      topics: quiz_categories
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: <LogoHeader navigation={navigation} navigateTo="Home" />,
      headerRight: <CoinHeader navigation={navigation} />
    };
  };

  render() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);
    const availabilities = navigation.getParam("availabilities", [
      [true, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]);

    let topicButtons = [];

    this.state.topics.forEach((topic, index) => {
      if (availabilities[index].indexOf(true) != -1) {
        topicButtons.push(
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttonStyle}
              key={index}
              onPress={() =>
                this.props.navigation.navigate("Levels", {
                  availabilities: availabilities,
                  categoryIndex: index,
                  topicName: topic,
                  numLevels: availabilities[index].length,
                  points: points
                })
              }
            >
              <Text style={styles.listText}>{topic}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lockStyle} disabled={true}>
              <FontAwesome
                name="unlock"
                size={38}
                color={Colors.lightGrayPurple}
              />
            </TouchableOpacity>
          </View>
        );
      } else {
        topicButtons.push(
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyle} disabled={true}>
              <Tooltip
                width="90%"
                popover={<Text>This module is unavailable</Text>}
              >
                <Text style={styles.listText}>{topic}</Text>
              </Tooltip>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lockStyle} disabled={true}>
              <FontAwesome
                name="lock"
                size={38}
                color={Colors.lightGrayPurple}
              />
            </TouchableOpacity>
          </View>
        );
      }
    });

    return (
      <ScrollView contentContainerStyle={styles.categoryContainer}>
        <Text style={styles.title}> Quiz Category</Text>
        {topicButtons}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonStyle: {
    backgroundColor: "white",
    borderColor: Colors.darkGrayPurple,
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    margin: 5
  },
  lockStyle: {
    alignItems: "center",
    backgroundColor: "white",

    width: 50,

    margin: 10,
    justifyContent: "center"
  },
  buttonRow: {
    flexDirection: "row",
    margin: 8
  },
  disabledButtonStyle: {
    backgroundColor: "white",
    borderColor: Colors.lightGrayPurple,
    width: "94%",
    borderRadius: 10,
    borderWidth: 2,
    margin: 10
  },
  listText: {
    fontSize: 24,
    margin: 15,
    textAlign: "center",
    justifyContent: "center",
    color: Colors.darkGrayPurple
  },
  title: {
    fontSize: 30,
    color: Colors.darkGrayPurple,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  icon: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    textAlign: "center"
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "column",
    color: Colors.darkGrayPurple,
    justifyContent: "center",
    alignItems: "center"
  },
  disabledText: {
    color: Colors.lightGrayPurple,
    fontSize: 24
  }
});
