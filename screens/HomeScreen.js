import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Colors from "../constants/Colors";
import { Ionicons, FontAwesome } from '@expo/vector-icons'



export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    // some stuff for gathering the topics (i.e. reading json or firebase calls)
  
    this.state = { 
      "topics" : ["Credit Cards", "Student Loans", "Investing"]
    };
  

    
  }


  render() {
    let topicButtons = []

    this.state.topics.forEach((topicName, index) => {
      let level = index.toString();


      topicButtons.push(<TouchableOpacity
        key = {level}
        style = {styles.listContainer}
        onPress={() => this.props.navigation.navigate("Levels", {topicName})}
        >
        <Text>
          {topicName} <Ionicons name="md-card" size={32} color={Colors.darkGrayPurple} />
        </Text>
      </TouchableOpacity>);
    })

    return (
      // this should be a for loop or a map or something
      <View style={styles.levelContainer}>
      <ScrollView ref={(ref) => this.myScroll = ref}>
        <View>
          <Text style={styles.title}>Topics:</Text>
          {topicButtons}
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
 
  contentContainer: {
    paddingTop: 30
  },
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
