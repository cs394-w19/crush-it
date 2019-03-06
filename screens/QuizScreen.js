import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  InteractionManager
} from "react-native";

import Colors from "../constants/Colors";

import QuizProgressBar from "../components/Quiz/QuizProgressBar";
import QuizStatement from "../components/Quiz/QuizStatement";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizButtons from "../components/Quiz/QuizButtons";

import quiz_data from "../assets/quiz_data";

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points : 0,
      quiz: null,
      quizProgress: 0,
      score: 0,
      submitted: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    //const { params = {} } = navigation.state;
    return {
      //title: "Quiz",
      tabBarVisible: false,
      headerStyle: {
        height: 71,
        backgroundColor: Colors.header
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("Levels")}>
          <Image
            source={require("../assets/images/logos/CrushIt_LogoV2small.png")}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={styles.coinsTotal}>
        <TouchableOpacity onPress={() => navigation.navigate("Partners")}>
            <Image
              style = {{width : 40, height : 40}}
              source={require("../assets/images/coin.png")}
            />
        </TouchableOpacity>
        <Text style = {{fontSize: 18, color: "white", marginLeft: 5}}>100</Text>
        </View>
      )
    };
  };

  async componentDidMount() {

    let category = this.props.navigation.getParam("category", 0);
    let level = this.props.navigation.getParam("level", 1);

    let quiz = quiz_data.find(q => {
      return q.quizCategory === category && q.quizLevel === level;
    });

    this.setState({
      quiz: quiz,
    });

    this.props.navigation.setParams({
      quiz: this.state.quiz
    });
  }

  getAnswerChoice(answerText) {
    let currQuestion = this.state.quiz.questions[this.state.quizProgress];
    return currQuestion.answerChoices.find(choice => {
      return answerText === choice.answerText;
    });
  }

  isAnswerCorrect(answerText) {
    this.getAnswerChoice(answerText).isCorrect;
  }

  nextQuestion() {
    if (this.state.quizProgress + 1 >= this.state.quiz.questions.length) {
      // presumably also need metrics for each question
      this.props.navigation.navigate("Results", {
        score: this.state.score,
        maxScore: this.state.quiz.questions.length
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

  handleScoring(answerText) {
    let answerCorrect = this.isAnswerCorrect(answerText);
    let newScore = answerCorrect ? this.state.score + 1 : this.state.score;
    this.setState({ score: newScore });
  }

  handleAnswerButtonPress(answerText) {
    let answerCorrect = this.isAnswerCorrect(answerText);
    this.handleScoring(answerText);
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
    const { navigation } = this.props;
    const level = navigation.getParam("level", "0");
    console.log(level);
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
    height: "100%"
  },
  coinsTotal: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginRight: 10
  }
});
