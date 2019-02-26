import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import ProgressBar from "react-native-progress/Bar";
import CardView from "react-native-cardview";

import Colors from "../constants/Colors";
import QuizBody from "../components/Quiz/QuizBody";
import QuizButtons from "../components/Quiz/QuizButtons";

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizProgress: 0,
      score: 0,
      submitted: false,
      explanation: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    //const { params = {} } = navigation.state;
    return {
      title: "Levels",
      tabBarVisible: false,
      headerStyle: {height: 71},
      headerLeft: (
        <Image  
          source={require('../assets/images/logos/CrushIt_LogoV2small.png')}
        />
      ),
    };
  };

  render() {
    

    return (
      <View style={styles.quizContainer}>
        <Text> Hello </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1
  },
  imageContainer: {
    position: "absolute",
    top: "55%",
    padding: "1%",
    height: "30%"
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  }
});
