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

  nextQuestion(answerText) {
    let answerCorrect = this.isAnswerCorrect(answerText);
    let newScore = answerCorrect ? this.state.score + 1 : this.state.score;

    this.setState({ score: newScore });

    if (this.state.quizProgress+1 >= this.state.quiz.questions.length) {
      // presumably also need metrics for each question
      this.props.navigation.navigate("Results", {
        score: this.state.score,
        maxScore: this.state.quiz.questions.length,
      });
      this.setState({
        quizProgress: 0,
        score: 0,
        submitted: false
      });
    }
    else {
      this.setState({
        quizProgress: this.state.quizProgress + 1,
        submitted: false,
      });
    }
  }

  handleAnswerButtonPress(answerText) {
    let answerCorrect = this.isAnswerCorrect(answerText);
    this.setState({
      submitted: answerText,
    });
    setTimeout(() => { this.nextQuestion(answerText) }, 1000);
  }

  render() {
    if (!this.state.quiz) return <Text />;

    let answers = this.state.quiz.questions[
      this.state.quizProgress
    ].answerChoices.map(choice => {
      return choice.answerText;
    });
    let buttons = answers.map(answerText => {
      let answerCorrect = this.isAnswerCorrect(answerText);
      let answerStyle = answerCorrect ? styles.multipleChoiceOptionCorrect : styles.multipleChoiceOptionWrong;
      let buttonStyle = answerText === this.state.submitted ? answerStyle : styles.multipleChoiceOption;

      return (
        <CardView
          key={answerText}
          style={buttonStyle}
          cardElevation={5}
          cornerRadius={10}
          cornerOverlap={false}
        >
          <Button
            title={answerText}
            color={buttonStyle.color}
            onPress={() => this.handleAnswerButtonPress(answerText)}
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
    backgroundColor: 'white',
    color: 'black',
    width: "44%",
    margin: "3%",
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
  onfocused: {
    backgroundColor: "red",
    color: "white"
  }
});
