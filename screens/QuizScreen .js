import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  View
} from "react-native";

import { ExpoLinksView } from "@expo/samples";
import ProgressBar from "react-native-progress/Bar";
import CardView from "react-native-cardview";
import Colors from "../constants/Colors";

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizProgress: 0,
      score: 0,
      button: 0,
      submitted: false,
      color: "appPrimary"
    };
  }

  static navigationOptions = navigation => {
    //const { params = {} } = navigation.state;
    return {
      title: "Quiz"
    };
  };

  componentDidMount() {
    let quiz_data = require("../assets/quiz_data.json").quizzes;
    let quiz = quiz_data.find(q => {
      return q.quizName === "sample quiz";
    });
    this.setState({
      quiz: quiz
    });

    this.props.navigation.setParams({
      quiz: this.state.quiz
    });
  }

  nextQuestion(answerText) {
    //console.log(this.state.quizProgress);
    let currQuestion = this.state.quiz.questions[this.state.quizProgress];
    let choice = currQuestion.answerChoices.find(choice => {
      return answerText === choice.answerText;
    });
    let answerCorrect = choice.isCorrect;

    this.setState({
      quizProgress: this.state.quizProgress + 1,
      score: this.state.score + (answerCorrect ? 1 : 0)
    });

    if (this.state.quizProgress + 1 >= this.state.quiz.questions.length) {
      // presumably also need metrics for each question
      this.props.navigation.navigate("Results", {
        score: this.state.score,
        maxScore: this.state.quiz.questions.length
      });
      this.setState({ quizProgress: 0, score: 0 });
    }
  }
  buttonColorChange(answerText) {
    let currQuestion = this.state.quiz.questions[this.state.quizProgress];
    let choice = currQuestion.answerChoices.find(choice => {
      return answerText === choice.answerText;
    });
    let answerCorrect = choice.isCorrect;

    this.setState({
      color: answerCorrect ? "green" : "red"
    });
  }
  saveAndContinue = () => {
    if (this.state.submitted == false) {
      return new Promise(function() {
        setTimeout(
          function() {
            this.setState({ submitted: true });
          }.bind(this),
          3000
        ); // wait 3 seconds, then reset to false
      });
    }
  };

  buttonFunctionCombined(answerText) {
    this.buttonColorChange(answerText);
    //color changed
    this.saveAndContinue();
    // hold for 3 secs
    this.nextQuestion(answerText);
  }

  render() {
    if (!this.state.quiz) return <Text />;

    let answers = this.state.quiz.questions[
      this.state.quizProgress
    ].answerChoices.map(choice => {
      return choice.answerText;
    });
    let buttons = answers.map(answerText => {
      return (
        <CardView
          key={answerText}
          style={styles.multipleChoiceOption}
          cardElevation={5}
          cornerRadius={10}
          cornerOverlap={false}
        >
          <Button
            color={this.state.color}
            title={answerText}
            onPress={() => this.buttonFunctionCombined(answerText)}
          >
            <Text style={styles.multipleChoiceButton}>{answerText}</Text>
          </Button>
        </CardView>
      );
    });
    return (
      <View style={styles.quizContainer}>
        <ProgressBar
          progress={this.state.quizProgress / this.state.quiz.questions.length}
          borderRadius={0}
          width={null}
          height={10}
          borderWidth={0}
          color={Colors.appPrimary}
        />
        <CardView
          style={styles.questionContainer}
          cardElevation={5}
          cornerRadius={10}
          cornerOverlap={false}
        >
          <Text style={{ fontSize: 24 }}>
            {this.state.quiz
              ? this.state.quiz.questions[this.state.quizProgress].questionText
              : ""}
          </Text>
        </CardView>
        <View style={styles.buttonContainer}>{buttons}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1
  },
  buttonContainer: {
    position: "absolute",
    bottom: "0%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "30%"
  },
  questionContainer: {
    position: "absolute",
    bottom: "30%",
    backgroundColor: "white",
    padding: 20,
    margin: "3%",
    width: "94%",
    height: "60%"
  },
  multipleChoiceOption: {
    backgroundColor: "white",
    width: "44%",
    margin: "3%",
    padding: 15
  },
  multipleChoiceButton: {
    fontSize: 24,
    color: Colors.appPrimary,
    textAlign: "center"
    //fontWeight: 'bold',
  },
  onfocused: {
    backgroundColor: "red",
    color: "white"
  }
});
