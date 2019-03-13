import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Tooltip } from "react-native-elements";
import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

export default class LevelScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <LogoHeader navigation={navigation} navigateTo="Home" />,
      headerRight: <CoinHeader navigation={navigation} />
    };
  };

  render() {
    const { navigation } = this.props;
    const numLevels = navigation.getParam("numLevels", "3");
    const title = navigation.getParam("topicName", "Topic Unavailable");
    const availabilities = navigation.getParam("availabilities");
    const categoryIndex = navigation.getParam("categoryIndex", 0);
    const points = navigation.getParam("points", 0);

    let level_buttons = [];

    for (let i = 0; i < numLevels; i++) {
      if (availabilities[categoryIndex][i] == 2) {
        level_buttons.push (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              key={i}
              style={styles.buttonStyle}
              onPress={() =>
                this.props.navigation.navigate("Quiz", {
                  level: i + 1,
                  points: points,
                  availabilities: availabilities,
                  categoryIndex: categoryIndex
                })
              }
            >
              <Text style={styles.listText}>Level {i + 1}</Text>
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
      }
      else if (availabilities[categoryIndex][i] == 1) {
        level_buttons.push(
          <View style={styles.buttonRow}>
            <TouchableOpacity
              key={i}
              style={styles.buttonStyle}
              onPress={() =>
                this.props.navigation.navigate("Quiz", {
                  level: i + 1,
                  points: points,
                  availabilities: availabilities,
                  categoryIndex: categoryIndex
                })
              }
            >
              <Text style={styles.listText}>Level {i + 1}</Text>
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
        level_buttons.push(
          ///////
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyle} disabled={true}>
              <Tooltip
                width="90%"
                popover={<Text>Complete previous level to unlock.</Text>}
              >
                <Text style={styles.listText}>Level {i + 1}</Text>
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
    }

    return (
      <ScrollView contentContainerStyle={styles.levelContainer}>
        <Text style={styles.title}>
          {" "}
          {title}{" "}
        </Text>
        {level_buttons}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    backgroundColor: "white",
    borderColor: Colors.darkGrayPurple,
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
  },
  lockStyle: {
    alignItems: "center",
    backgroundColor: "white",
    width: 50,
    margin: 10,
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    margin: 8,
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
    flexDirection: "row",
    color: Colors.darkGrayPurple,
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
    textAlign: "center",
    flex: 1,
  },
  levelContainer: {
    flex: 1,
    color: Colors.darkGrayPurple,
    justifyContent: "center",
  },
  disabledText: {
    color: Colors.lightGrayPurple,
    fontSize: 24,
  },
  headerStats: {
    color: Colors.lightGrayPurple,
    fontSize: 25,
    marginRight: 5,
  },
  coinsTotal: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginRight: 10,
  }
});
