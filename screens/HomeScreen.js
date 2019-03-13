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
import MenuButton from "../components/Menus/MenuButton.js";

import quiz_categories from "../assets/quiz_categories";
import quiz_data from "../assets/quiz_data";

export default class HomeScreen extends React.Component {

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
    for (let i = 0; i < quiz_categories.length; i++) {
      let category_availabilities = [];
      for (let j = 0; j < quiz_data.length; j++) {
        if (quiz_data[j].quizCategory == i) {
          category_availabilities.push(0);
        }
      }
      availabilites.push(category_availabilities);
    }
    availabilites[0][0] = 1;
    return availabilites;
  }

  render() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);
    const availabilities = navigation.getParam(
      "availabilities",
      this.getQuizAvailabilities()
    );
    let topicButtons = [];

    quiz_categories.forEach((topic, index) => {
      let available = 0;
      let params = {
        availabilities: availabilities,
        categoryIndex: index,
        topicName: topic,
        numLevels: availabilities[index].length,
        points: points
      };
      if (
        availabilities[index].length &&
        availabilities[index].lastIndexOf(2) === availabilities[index].length - 1
      ) {
        available = 2;
      } else if (
        availabilities[index].indexOf(1) !== -1 ||
        availabilities[index].indexOf(2) !== -1
      ) {
        available = 1;
      }
      topicButtons.push(
        <MenuButton
          key={index}
          navigation={this.props.navigation}
          navigateTo="Levels"
          params={params}
          index={index}
          label={topic}
          available={available}
        />
      );
    });

    return (
      <ScrollView contentContainerStyle={styles.categoryContainer}>
        <Text style={styles.title}>Quiz Category</Text>
        {topicButtons}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    flexDirection: "column",
    color: Colors.darkGrayPurple,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: Colors.darkGrayPurple,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
});
