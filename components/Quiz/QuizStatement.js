import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";



export default class QuizStatement extends React.Component {
  render() {
    let quiz = this.props.quiz;
    let question = this.props.question;

    return(
      <View style={styles.questionStatementContainer}>
        <Text style={styles.questionStatementText}>
          {this.props.explanation
            ? quiz.questions[question].explanation
            : quiz.questions[question].questionText}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  questionStatementContainer: {
    padding: 10,
    width: "100%",
    flex: 1,
    backgroundColor: "#ffe769",
  },
  questionStatementText: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto"
  }
});
