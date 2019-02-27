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
  }

  static navigationOptions = ({ navigation }) => {
    //const { params = {} } = navigation.state;
    return {
      title: "Credit Card Debt",
      headerStyle: {height: 71},
      headerLeft: (
        <Image
          source={require('../assets/images/logos/CrushIt_LogoV2small.png')}
        />
      ),
    };
  };

  render() {

    images = [
      require('../assets/images/buttons/Level_1button3.png'),
      require('../assets/images/buttons/Level_2button3.png'),
      require('../assets/images/buttons/Level_3button3.png'),
    ];

    level_buttons = images.map(image => {
      return (
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Quiz")}
          >
          <Image
            style={styles.image}
            source={image}
            resizeMode={'contain'}
          />
          </TouchableOpacity>
        </View>
      );
    });

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
