import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import CardView from "react-native-cardview";



export default class QuizBody extends React.Component {
  render() {
    let quiz = this.props.quiz;
    let question = this.props.question;

    return(
      <CardView
        style={styles.questionContainer}
        cardElevation={5}
        cornerRadius={10}
        cornerOverlap={false}
      >
        <Text style={{ fontSize: 24 }}>
          {this.props.explanation
            ? quiz.questions[question].explanation
            : quiz.questions[question].questionText}
        </Text>
      </CardView>
    );
  }
}


const styles = StyleSheet.create({
  questionContainer: {
    position: "absolute",
    bottom: "30%",
    backgroundColor: "white",
    padding: 20,
    margin: "3%",
    width: "94%",
    height: "60%"
  },
});
