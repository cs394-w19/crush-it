import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";

import CardView from "react-native-cardview";
import QuizButton from "./QuizButton";

export default class QuizButtons extends React.Component {
  render() {
    let answers = this.props.quiz.questions[
      this.props.quizProgress
    ].answerChoices.map(choice => {
      return choice.answerText;
    });

    let answerButtons = answers.map(answerText => {
      let buttonStyle = styles.multipleChoiceOption;
      let answerCorrect = this.props.isAnswerCorrect(answerText);
      let answerStyle = answerCorrect ? styles.multipleChoiceOptionCorrect : styles.multipleChoiceOptionWrong;
      buttonStyle = answerText === this.props.submitted ? answerStyle : styles.multipleChoiceOption;

      return (
        <QuizButton
          key={answerText}
          text={answerText}
          buttonStyle={buttonStyle}
          handleButtonPress={() => this.props.handleAnswerButtonPress(answerText)}
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
    position: "absolute",
    bottom: "0%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "15%"
  },
  multipleChoiceOption: {
    backgroundColor: 'white',
    color: 'black',
    width: "44%",
    margin: "3%",
    padding: 15
  },
  nextButton: {
    backgroundColor: 'white',
    color: 'black',
    width: "94%",
    padding: 15
  },
  multipleChoiceOptionCorrect: {
    backgroundColor: '#a8ffac',
    color: 'black',
    width: "44%",
    margin: "3%",
    padding: 15
  },
  multipleChoiceOptionWrong: {
    backgroundColor: '#ffa8a8',
    color: 'black',
    width: "44%",
    margin: "3%",
    padding: 15
  },
  multipleChoiceButton: {
    fontSize: 24,
    textAlign: "center"
  },
});
