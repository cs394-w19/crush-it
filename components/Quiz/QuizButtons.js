import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import Colors from "../../constants/Colors";
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
      } /*else if (answer.buttonOrder === "3") {
        buttonStyle = styles.multipleChoiceOptionThree;
      }*/

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
          buttonStyle={[styles.quizButton, buttonStyle]}
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
    alignItems: "flex-end",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },
  quizButton: {
    borderRadius: 10,
    borderWidth: 3,
    margin: 10,
  },
  multipleChoiceOptionOne: {
    backgroundColor: "white",
    width: "44%",
    borderColor: Colors.darkGrayPurple,
  },
  multipleChoiceOptionTwo: {
    backgroundColor: "white",
    width: "44%",
    borderColor: Colors.darkGrayPurple,
  },
  nextButton: {
    backgroundColor: "white",
    width: "94%",
    borderColor: Colors.darkGrayPurple,
  },
  multipleChoiceOptionCorrect: {
    backgroundColor: Colors.buttonCorrect,
    width: "44%",
    borderColor: Colors.buttonCorrect,
  },
  multipleChoiceOptionWrong: {
    backgroundColor: Colors.buttonWrong,
    width: "44%",
    borderColor: Colors.buttonWrong,
  },
});
