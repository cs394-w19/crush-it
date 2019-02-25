import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import ProgressBar from "react-native-progress/Bar";
import CardView from "react-native-cardview";

import Colors from "../constants/Colors";
import QuizBody from "../components/Quiz/QuizBody";
import QuizButtons from "../components/Quiz/QuizButtons";

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizProgress: 0,
      score: 0,
      submitted: false,
      explanation: false,
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
      return q.quizName === "Credit Card Debt";
    });
    this.setState({
      quiz: quiz
    });

    this.props.navigation.setParams({
      quiz: this.state.quiz
    });
  }

  isAnswerCorrect(answerText) {
    let currQuestion = this.state.quiz.questions[this.state.quizProgress];
    let choice = currQuestion.answerChoices.find(choice => {
      return answerText === choice.answerText;
    });
    return choice.isCorrect;
  }

  nextQuestion() {
    if (this.state.quizProgress+1 >= this.state.quiz.questions.length) {
      // presumably also need metrics for each question
      this.props.navigation.navigate("Results", {
        score: this.state.score,
        maxScore: this.state.quiz.questions.length,
      });
      this.setState({
        quizProgress: 0,
        score: 0,
        submitted: false,
        explanation: false,
      });
    }
    else {
      this.setState({
        quizProgress: this.state.quizProgress + 1,
        submitted: false,
        explanation: false,
      });
    }
  }

  handleScoring(answerText) {
    let answerCorrect = this.isAnswerCorrect(answerText);
    let newScore = answerCorrect ? this.state.score + 1 : this.state.score;
    this.setState({ score: newScore });
  }

  handleAnswerButtonPress(answerText) {
    let answerCorrect = this.isAnswerCorrect(answerText);
    this.handleScoring(answerText);
    this.setState({
      submitted: answerText,
    });
    setTimeout(() => { this.setState({ explanation: true }) }, 1000);
  }

  render() {
    if (!this.state.quiz) return <Text />;

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
        <QuizBody
          quiz={this.state.quiz}
          question={this.state.quizProgress}
          explanation={this.state.explanation}
          nextQuestion={() => this.nextQuestion()}
        />
        <QuizButtons
          quiz={this.state.quiz}
          quizProgress={this.state.quizProgress}
          submitted={this.state.submitted}
          explanation={this.state.explanation}
          handleAnswerButtonPress={(text) => this.handleAnswerButtonPress(text)}
          isAnswerCorrect={(answerText) => this.isAnswerCorrect(answerText)}
          nextQuestion={() => this.nextQuestion()}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1
  },
});
