import React from "react";
import {
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
import quiz_data from "../assets/quiz_data";

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
    return {
      headerLeft: <LogoHeader navigation={navigation} navigateTo="Home" />,
      headerRight: <CoinHeader navigation={navigation} />
    };
  };

  getQuizAvailabilities() {
    // creates an array of arrays that holds information about the
    // availability or completion of a quiz.
    // States:
    // 0 - not available (locked)
    // 1 - available, not complete (unlocked)
    // 2 - available, completed (checkmark)
    let availabilites = [];
    for (let i=0; i < this.state.topics.length; i++) {
      let category_availabilities = [];
      for (let j=0; j < quiz_data.length; j++) {
        if (quiz_data[j].quizCategory == i) {
          category_availabilities.push(0);
        }
      }
      availabilites.push(category_availabilities);
    }
    availabilites[0][0] = 1;
    console.log(availabilites);
    return availabilites;
  }

  render() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);
    const availabilities = navigation.getParam("availabilities", this.getQuizAvailabilities());

    let topicButtons = [];

    this.state.topics.forEach((topic, index) => {

      if (availabilities[index].length && availabilities[index].lastIndexOf(2) === availabilities[index].length-1) {
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
                  points: points,
                })
              }
            >
              <Text style={styles.listText}>{topic}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lockStyle} disabled={true}>
              <Ionicons
                name="md-checkmark-circle"
                size={38}
                color={Colors.greenCheck}
              />
            </TouchableOpacity>
          </View>
        );
      } else if (availabilities[index].indexOf(1) !== -1 || availabilities[index].indexOf(2) !== -1) {
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
