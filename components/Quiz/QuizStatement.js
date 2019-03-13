import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import Colors from "../../constants/Colors";

export default class QuizStatement extends React.Component {
  render() {
    let quiz = this.props.quiz;
    let question = this.props.question;

    return(
      <View style={styles.questionStatementContainer}>
        <Text style={styles.questionHeaderText}>
            {quiz.questions[question].header}
        </Text>
        <Text style={styles.questionStatementText}>
            {quiz.questions[question].statement}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  questionStatementContainer: {
    padding: 25,
    width: "100%",
  },
  questionStatementText: {
    fontSize: 24,
    color: Colors.darkGrayPurple,
    textAlign: "left",
    marginTop: "auto",
    marginBottom: "auto"
  },
  questionHeaderText: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.darkGrayPurple,
    textAlign: "left",
    marginTop: "auto",
    marginBottom: "auto",
  }
});
