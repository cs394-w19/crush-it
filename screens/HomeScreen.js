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
import { Tooltip} from 'react-native-elements';



export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    // some stuff for gathering the topics (i.e. reading json or firebase calls)
  
    this.state = { 
      points : this.props.navigation.getParam("points", 0),
      "topics" : [
        {
          id: 0,
          title: "Credit Cards", 
          num_levels: 3,
          available: true,
          icon: 'md-card'
        }, 
        {
          id: 1,
          title: "Student Loans", 
          num_levels: 3,
          available: false,
        },
        {
          id: 2,
          title: "Budgeting", 
          num_levels: 3,
          available: false,
        },
        { 
          id: 3,
          title: "Retirement", 
          num_levels: 3,
          available: false,
        },
        {
          id: 4,
          title: "Investing",
          num_levels: 3,
          available: false,
        }]
    };
  

    
  }


  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      //title: "Results",
      tabBarVisible: false,
      headerStyle: {
        height: 71,
        backgroundColor: Colors.header
      },
      headerLeft: (
        <TouchableOpacity
        >
          <Image
            source={require("../assets/images/logos/CrushIt_LogoV2small.png")}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Partners")}>
          <Image
            style = {{width : 40, height : 40}}
            source={require("../assets/images/coin.png")}
          />
          <Text>300</Text>
        </TouchableOpacity>
      )
    };
  };

  render() {
    let topicButtons = []

    this.state.topics.forEach((topic, index) => {
      if(topic.available) {
        topicButtons.push(
          <TouchableOpacity
            style={styles.buttonStyle}
            key = {topic.id}
            onPress={() => this.props.navigation.navigate("Levels", {
                                                                      topicName: topic.title, 
                                                                      topicID: topic.id, 
                                                                      topicNumLevels: topic.num_levels,
                                                                      topicIcon: topic.icon
                                                                    })}
            >
            <Text style = {styles.listText}>
              {topic.title} 
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
              {topic.title} 
            </Text>  
          </Tooltip> 
          </View>);
      }
    })

    return (
      // this should be a for loop or a map or something
      <View style={styles.categoryContainer}>
      <ScrollView ref={(ref) => this.myScroll = ref}>
        <View>
          <Text style={styles.title}> Quiz Category</Text>
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
  categoryContainer: {
    flex: 1,
    color: Colors.darkGrayPurple,
    justifyContent: "center",
    //alignItems: "center",
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
