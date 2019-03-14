import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import Colors from "../constants/Colors";
import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";
import MenuButton from "../components/Menus/MenuButton.js";


export default class LevelScreen extends React.Component {

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
    const availabilities = navigation.getParam("availabilities", [[1]]);
    const categoryIndex = navigation.getParam("categoryIndex", 0);
    const points = navigation.getParam("points", 0);

    let levelButtons = [];

    for (let i = 0; i < numLevels; i++) {
      let params = {
        level: i + 1,
        points: points,
        availabilities: availabilities,
        categoryIndex: categoryIndex
      };
      levelButtons.push(
        <MenuButton
          key={i}
          navigation={this.props.navigation}
          navigateTo="Quiz"
          params={params}
          label={"Level " + (i + 1)}
          available={availabilities[categoryIndex][i]}
        />
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.levelContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        {levelButtons}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  levelContainer: {
    flex: 1,
    color: Colors.darkGrayPurple,
    justifyContent: "center",
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

});
