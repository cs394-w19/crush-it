import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Tooltip} from 'react-native-elements';

export default class LevelScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizLevels: [{
        title: "Level 1", 
        id: 0,
        available: true,
      },
      {
        title: "Level 2",
        id: 1,
        available: false,
      },
      {
        title: "Level 3",
        id: 2,
        available: false,
      }],
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/images/logos/CrushIt_LogoV2small.png")}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Text style={styles.headerStats}> 
          <Ionicons name="md-ribbon" size={32} color={Colors.lightGrayPurple} />   250
        </Text>
      )
    };
  };
  

  render() {
    const { navigation } = this.props;
    const numLevels = navigation.getParam("numLevels", "0");
    const topicID = navigation.getParam("topicID", "-1");
    const title = navigation.getParam("topicName", "Topic Unavailable");
    const icon = navigation.getParam("topicIcon", "");
    console.log(numLevels);
    console.log(topicID);
    console.log(title);

    let level_buttons = [];
    this.state.quizLevels.forEach((item, index) => {
      let level = index.toString();
      if(item.available) {
        level_buttons.push(
          <TouchableOpacity
            key = {level}
            style = {styles.buttonStyle}
            onPress = {() => this.props.navigation.navigate("Quiz", {level: level})}>
            <Text style = {styles.listText}>
                {item.title}
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
                  {item.title}
              </Text>
            </Tooltip>
          </View>
        );
      }
    });

    return (
      <View style={styles.levelContainer}>
        <ScrollView ref={(ref) => this.myScroll = ref}>
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
  }
});
