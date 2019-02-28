import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import CardView from "react-native-cardview";
import QuizButton from "./QuizButton";
import Emoji from "react-native-emoji";

export default class QuizButtons extends React.Component {
  render() {
    let answers = this.props.quiz.questions[
      this.props.quizProgress
    ].answerChoices.map(choice => {
      return choice;
    });

    let answerButtons = answers.map(answer => {
      // let buttonStyle = styles.multipleChoiceOption;
      let answerCorrect = this.props.isAnswerCorrect(answer.answerText);

      let buttonStyle = styles.nextButton;
      if (answer.buttonOrder === "0") {
        buttonStyle = styles.multipleChoiceOptionOne;
      } else if (answer.buttonOrder === "1") {
        buttonStyle = styles.multipleChoiceOptionTwo;
      }

      let answerStyle = answerCorrect
        ? styles.multipleChoiceOptionCorrect
        : styles.multipleChoiceOptionWrong;
      buttonStyle =
        answer.answerText === this.props.submitted &&
        buttonStyle !== styles.nextButton
          ? answerStyle
          : buttonStyle;

      return (
        <QuizButton
          key={answer.answerText}
          text={answer.answerText}
          buttonStyle={buttonStyle}
          handleButtonPress={() =>
            this.props.handleAnswerButtonPress(answer.answerText)
          }
        />
      );
    });

    return <View style={styles.buttonContainer}>{answerButtons}</View>;
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "20%"
  },
  multipleChoiceOptionOne: {
    backgroundColor: "white",
    color: "#889770",
    width: "44%",
    margin: "3%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#A9A9A9"
  },
  multipleChoiceOptionTwo: {
    backgroundColor: "white",
    color: "#889770",
    width: "44%",
    margin: "3%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#A9A9A9"
  },
  nextButton: {
    backgroundColor: "white",
    color: "black",
    width: "94%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#A9A9A9",
    marginTop: 10
  },
  multipleChoiceOptionCorrect: {
    backgroundColor: "#a8ffac",
    color: "black",
    width: "44%",
    margin: "3%",
    padding: 15,
    borderRadius: 10
  },
  multipleChoiceOptionWrong: {
    backgroundColor: "#ffa8a8",
    color: "black",
    width: "44%",
    margin: "3%",
    padding: 15,
    borderRadius: 10
  },
  multipleChoiceButton: {
    fontSize: 100,
    textAlign: "center"
  }
});
