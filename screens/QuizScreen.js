import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import QuizProgressBar from "../components/Quiz/QuizProgressBar";
import QuizStatement from "../components/Quiz/QuizStatement";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizButtons from "../components/Quiz/QuizButtons";
import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

import quiz_data from "../assets/quiz_data";

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizProgress: 0,
      submitted: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <LogoHeader navigation={navigation} navigateTo="Levels" />
      ),
      headerRight: (
        <CoinHeader navigation={navigation} />
      )
    };
  };

  async componentDidMount() {

    let category = this.props.navigation.getParam("category", 0);
    let level = this.props.navigation.getParam("level", 1);

    let quiz = quiz_data.find(q => {
      return q.quizCategory === category && q.quizLevel === level;
    });

    this.setState({ quiz: quiz });

    this.props.navigation.setParams({ quiz: this.state.quiz });
  }

  getAnswerChoice(answerText) {
    let currQuestion = this.state.quiz.questions[this.state.quizProgress];
    return currQuestion.answerChoices.find(choice => {
      return answerText === choice.answerText;
    });
  }

  isAnswerCorrect(answerText) {
    return this.getAnswerChoice(answerText).isCorrect;
  }

  nextQuestion() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);
    const availabilities = navigation.getParam("availabilities", [[1]]);
    const categoryIndex = navigation.getParam("categoryIndex");
    let level = this.props.navigation.getParam("level", 1);
    let crushedIt = false;
    let dailyGoalMet = false;
    if (this.state.quizProgress + 1 >= this.state.quiz.questions.length) {
      // presumably also need metrics for each question
      if(level < availabilities[categoryIndex].length) {
        availabilities[categoryIndex][level] = 1;
      } else if (availabilities[categoryIndex][level-1] == 1) {
        crushedIt = true;
      }

      availabilities[categoryIndex][level-1] = 2;

      if (availabilities[categoryIndex][0] === 2 && availabilities[categoryIndex][1] === 1) {
        dailyGoalMet = true;
      }
      this.props.navigation.navigate("Results", {
        maxScore: this.state.quiz.questions.length,
        points: points + 100,
        availabilities: availabilities,
        categoryIndex: categoryIndex,
        crushedIt: crushedIt,
        dailyGoalMet : dailyGoalMet,
      });
      this.setState({
        quizProgress: 0,
        score: 0,
        submitted: false
      });
    } else {
      this.setState({
        quizProgress: this.state.quizProgress + 1,
        submitted: false
      });
    }
    this.myScroll.scrollTo({ x: 0, y: 0, animated: false });
  }

  handleAnswerButtonPress(answerText) {
    this.setState({
      submitted: answerText
    });

    if (this.getAnswerChoice(answerText).buttonOrder === '2') {
      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    } else {
      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    }
  }

  render() {
    if (!this.state.quiz) return <Text />;
    return (
      <View style={styles.quizContainer}>
        <QuizProgressBar
          quizProgress={this.state.quizProgress}
          length={this.state.quiz.questions.length}
        />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator ref={(ref) => this.myScroll = ref}>
        <QuizStatement
          quiz={this.state.quiz}
          question={this.state.quizProgress}
          nextQuestion={() => this.nextQuestion()}
        />
        <QuizQuestion
          quiz={this.state.quiz}
          question={this.state.quizProgress}
          source={this.state.quiz.questions[this.state.quizProgress].image}
          style={styles.image}
        />
        <QuizButtons
          quiz={this.state.quiz}
          quizProgress={this.state.quizProgress}
          submitted={this.state.submitted}
          handleAnswerButtonPress={(text) => this.handleAnswerButtonPress(text)}
          isAnswerCorrect={(answerText) => this.isAnswerCorrect(answerText)}
          nextQuestion={() => this.nextQuestion()}
        />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
  }
});
