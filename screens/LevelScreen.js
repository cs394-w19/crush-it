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
import { Ionicons, FontAwesome } from '@expo/vector-icons'

export default class LevelScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizLevels: [{
        title: "Easy", 
        id: 0,
        available: true,
      },
      {
        title: "Medium",
        id: 1,
        available: false,
      },
      {
        title: "Hard",
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
    let level_buttons = [];
    this.state.quizLevels.forEach((item, index) => {
      let level = index.toString();
      if(item.available) {
        level_buttons.push(
          <TouchableOpacity
            key = {level}
            style = {styles.listContainer}
            onPress = {() => this.props.navigation.navigate("Quiz", {level: level})}>
            <Text style = {styles.listText}>
                {item.title}
            </Text> 
          </TouchableOpacity>)
      } else {
        level_buttons.push(
          <View style={styles.listContainer}>
            <Text style = {styles.disabledText}>
                {item.title} <Ionicons name="md-lock" size={32} color={Colors.lightGrayPurple} />
            </Text>
          </View>
        );
      }
    });

    return (
      <View style={styles.levelContainer}>
        <ScrollView ref={(ref) => this.myScroll = ref}>
          <View>
            <Text style={styles.title}> Credit Card Debt <Ionicons name="md-card" size={32} color={Colors.darkGrayPurple} /></Text>
            {level_buttons}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  levelContainer: {
    flex: 1,
    color: Colors.darkGrayPurple
  },
  listContainer: {
    padding: 15,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGrayPurple,
    color: Colors.darkGrayPurple,
  },
  listText: {
    fontSize: 24,
    color: Colors.darkGrayPurple,
  },
  title: {
    fontSize: 32,
    marginTop: 13,
    color: Colors.darkGrayPurple,
    textAlign: 'center',

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
