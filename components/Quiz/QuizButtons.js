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
  },
  multipleChoiceOptionOne: {
    backgroundColor: "white",
    width: "44%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#A9A9A9",
    margin: 10,
  },
  multipleChoiceOptionTwo: {
    backgroundColor: "white",
    width: "44%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#A9A9A9",
    margin: 10,
  },
  nextButton: {
    backgroundColor: "white",
    width: "94%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#A9A9A9",
    margin: 10
  },
  multipleChoiceOptionCorrect: {
    backgroundColor: "#a8ffac",
    width: "44%",
    margin: 10,
    borderRadius: 10,
    borderColor: '#a8ffac',
    borderWidth: 3,
  },
  multipleChoiceOptionWrong: {
    backgroundColor: "#ffa8a8",
    width: "44%",
    margin: 10,
    borderRadius: 10,
    borderColor: '#ffa8a8',
    borderWidth: 3,
  },
});
