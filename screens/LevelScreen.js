import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Tooltip} from 'react-native-elements';

export default class LevelScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points : 0,
    }
  }

  static navigationOptions = ({ navigation }) => {
    //const { params = {} } = navigation.state;
    return {
      tabBarVisible: false,
      headerStyle: {
        height: 71,
        backgroundColor: Colors.header
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/images/logos/CrushIt_LogoV2small.png")}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={styles.coinsTotal}>
        <TouchableOpacity onPress={() => navigation.navigate("Partners")}>
            <Image
              style = {{width : 40, height : 40}}
              source={require("../assets/images/coin.png")}
            />
        </TouchableOpacity>
        <Text style = {{fontSize: 18, color: "white", marginLeft: 5}}>100</Text>
        </View>
      )
    };
  };

  render() {
    const { navigation } = this.props;
    const numLevels = navigation.getParam("numLevels", "3");
    const topicID = navigation.getParam("topicID", "-1");
    const title = navigation.getParam("topicName", "Topic Unavailable");
    const icon = navigation.getParam("topicIcon", "");
    const availablilities = navigation.getParam("availablilities", [true, false, false]);
    console.log(numLevels);
    console.log(topicID);
    console.log(title);

    let level_buttons = [];
    let topicName = this.props.navigation.getParam("topicName", "Unknown Quiz");


    for (let i = 0; i< numLevels; i++) {
      if (availablilities[i]) {
        level_buttons.push(
          <TouchableOpacity
            key = {i}
            style = {styles.buttonStyle}
            onPress = {() => this.props.navigation.navigate("Quiz", {level: i+1})}>
            <Text style = {styles.listText}>
              Level {i+1}
            </Text>
          </TouchableOpacity>)
      } else {
        level_buttons.push(
          <View style={styles.disabledButtonStyle}>
            <Tooltip width="90%"popover={<Text>Complete previous level to unlock.</Text>}>
              <Text style={styles.icon}>
                  <Ionicons name="md-lock" size={38} color={Colors.lightGrayPurple} />
              </Text>
              <Text style = {styles.listText}>
                  Level {i+1}
              </Text>
            </Tooltip>
          </View>
        );
      }
    }

    return (
      <View style={styles.levelContainer}>
        <ScrollView ref={ref => (this.myScroll = ref)}>
          <View>
            <Text style={styles.title}> {title} <Ionicons name={icon} size={32} color={Colors.darkGrayPurple} /></Text>
            {level_buttons}
          </View>
        </ScrollView>
      </View>
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
    marginTop: 15,
    marginBottom: 10,
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
  levelContainer: {
    flex: 1,
    color: Colors.darkGrayPurple,
    justifyContent: "center",
   // alignItems: "center",
  },
  disabledText: {
    color: Colors.lightGrayPurple,
    fontSize: 24
  },
  headerStats: {
    color: Colors.lightGrayPurple,
    fontSize: 25,
    marginRight: 5
  },
  coinsTotal: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginRight: 10
  }
});
