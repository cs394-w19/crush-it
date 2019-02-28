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
import { ExpoLinksView } from "@expo/samples";
import ProgressBar from "react-native-progress/Bar";
import CardView from "react-native-cardview";

import Colors from "../constants/Colors";
import QuizButtons from "../components/Quiz/QuizButtons";

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizscores: [2, 3, 1],
    }
  }

  static navigationOptions = ({ navigation }) => {
    //const { params = {} } = navigation.state;
    return {
      //title: "Levels",
      tabBarVisible: false,
      headerStyle: {
        height: 71,
        backgroundColor: Colors.appPurple
      },
      headerLeft: (
        <Image
          source={require('../assets/images/logos/CrushIt_LogoV2small.png')}
        />
      ),
    };
  };

  render() {

    images = [
      require('../assets/images/buttons/Level_1button0.png'),
      require('../assets/images/buttons/Level_1button1.png'),
      require('../assets/images/buttons/Level_1button2.png'),
      require('../assets/images/buttons/Level_1button3.png'),

      require('../assets/images/buttons/Level_2button0.png'),
      require('../assets/images/buttons/Level_2button1.png'),
      require('../assets/images/buttons/Level_2button2.png'),
      require('../assets/images/buttons/Level_2button3.png'),

      require('../assets/images/buttons/Level_3button0.png'),
      require('../assets/images/buttons/Level_3button1.png'),
      require('../assets/images/buttons/Level_3button2.png'),
      require('../assets/images/buttons/Level_3button3.png'),
    ];

    let level_buttons = [];

    for (i = 0; i < this.state.quizscores.length; i++) {
      let score = this.state.quizscores[i];

      if (score > 3 || score < 0)
        continue;

      level_buttons.push(
        <View style={styles.imageContainer} key={i * 4 + score}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Quiz")}
          >
          <Image
            style={styles.image}
            source={images[i*4+score]}
            resizeMode={'contain'}
          />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.levelContainer}>
        <ScrollView>
          <View style={styles.buttonRow}>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonRow : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: "100%",
    justifyContent: 'center',
    padding: "5%",
    paddingTop: "20%",
  },
  imageContainer: {
    width: "50%",
    height: 200,
    padding: "5%",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  }
});
