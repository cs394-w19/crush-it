import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image } from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

let quizData = require("../assets/quiz_data.json");

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points : this.props.navigation.getParam("points", 0),
    };
    }

//   componentDidMount() {
//   }

//   componentWillUnmount() {
//   }


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

    return (
      <View 
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleView}>  
          <Text style={styles.title}>
            Woohoo! You have  <Text style={{fontWeight: "bold", color : Colors.appPurple}}>{this.state.points}</Text> coins to spend!
          </Text>
        </View>
        
          <Button
            onPress={() => this.props.navigation.navigate("Levels")} // what should this be called/go back to
            title="Back to Levels"
            color={Colors.darkGrayPurple}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexWrap: "wrap-reverse",
    width: "100%"
  },
  child: {
    width: 300
  },
  titleView: {
    padding: "3%",
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 40,
    color: Colors.darkGrayPurple,
    margin: 20,

  },
  sliderStyle: {
    width: 300,
    marginTop: 40
  },
  headerStats: {
    color: Colors.lightGrayPurple,
    fontSize: 25,
    marginRight: 5
  }
});
