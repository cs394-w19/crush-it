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
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Tooltip } from 'react-native-elements';

import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

import quiz_categories from "../assets/quiz_categories";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    // some stuff for gathering the topics (i.e. reading json or firebase calls)
    this.state = {
      points : this.props.navigation.getParam("points", 0),
      topics : quiz_categories,
    };
  }


  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <LogoHeader navigation={navigation} navigateTo="Home" />
      ),
      headerRight: (
        <CoinHeader navigation={navigation} />
      )
    };
  };


  render() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);
    const availabilities = navigation.getParam("availabilities", 
    [
      [true, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    let topicButtons = [];

    this.state.topics.forEach((topic, index) => {
      if(availabilities[index].indexOf(true) != -1) {
        topicButtons.push(
          <TouchableOpacity
            style={styles.buttonStyle}
            key = {index}
            onPress={() => this.props.navigation.navigate("Levels", {
              availabilities: availabilities,
              categoryIndex: index,
              topicName: topic,
              numLevels: availabilities[index].length,
              points: points
            })}
            >
            <Text style = {styles.listText}>
              {topic}
            </Text>

          </TouchableOpacity>);

      } else {
        topicButtons.push(
          <View style={styles.disabledButtonStyle}>
          <Tooltip width="90%"popover={<Text>This module is unavailable</Text>}>
            <Text style={styles.icon}>
                <Ionicons name="md-lock" size={38} color={Colors.lightGrayPurple} />
              </Text>
            <Text style = {styles.listText}>
              {topic}
            </Text>
          </Tooltip>
          </View>);
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
    width: "94%",
    borderColor: Colors.darkGrayPurple,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  disabledButtonStyle: {
    backgroundColor: "white",
    width: "94%",
    borderColor: Colors.lightGrayPurple,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  listText: {
    fontSize: 24,
    margin: 15,
    textAlign: "center",
    justifyContent: "center",
    color: Colors.darkGrayPurple,
  },
  title: {
    fontSize: 30,
    color: Colors.darkGrayPurple,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrayPurple,
    textAlign: "center",
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
    alignItems: "center",
  },
  disabledText: {
    color: Colors.lightGrayPurple,
    fontSize: 24
  },

});
