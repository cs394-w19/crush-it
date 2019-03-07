import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import Colors from "../../constants/Colors";

export default class QuizQuestion extends React.Component {
  render() {
    let quiz = this.props.quiz;
    let question = this.props.question;

    image =  (
      <Image
        source={this.props.source}
        style={{ width:250, height:200 }}
        resizeMode={"contain"}
      />
    );

    return(
      <View style={styles.questionContainer}>
          {this.props.source ? image : <Text />}
          <Text style={{ fontSize: 24, color: Colors.darkGrayPurple, width: "100%", textAlign : "left" }}>
            {quiz.questions[question].question}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    padding: 25,
    width : "100%",
  },
});
