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
      let buttonStyle =
        answer.buttonOrder === "0"
          ? styles.multipleChoiceOptionOne
          : styles.multipleChoiceOptionTwo;

      let answerStyle = answerCorrect
        ? styles.multipleChoiceOptionCorrect
        : styles.multipleChoiceOptionWrong;
      buttonStyle =
        answer.answerText === this.props.submitted ? answerStyle : buttonStyle;

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

    let nextButton = (
      <QuizButton
        text={"Next"}
        buttonStyle={styles.nextButton}
        handleButtonPress={() => this.props.nextQuestion()}
      />
    );

    return (
      <View style={styles.buttonContainer}>
        {this.props.explanation ? nextButton : answerButtons}
      </View>
    );
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
    borderColor: "#a8ffac"
  },
  multipleChoiceOptionTwo: {
    backgroundColor: "white",
    color: "#889770",
    width: "44%",
    margin: "3%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ffa8a8"
  },
  nextButton: {
    backgroundColor: "white",
    color: "black",
    width: "94%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black"
  },
  multipleChoiceOptionCorrect: {
    backgroundColor: "#a8ffac",
    color: "black",
    width: "44%",
    margin: "3%",
    padding: 15
  },
  multipleChoiceOptionWrong: {
    backgroundColor: "#ffa8a8",
    color: "black",
    width: "44%",
    margin: "3%",
    padding: 15
  },
  multipleChoiceButton: {
    fontSize: 100,
    textAlign: "center"
  }
});
