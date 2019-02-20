import React from 'react';
import { ScrollView, StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ProgressBar from 'react-native-progress/Bar';
import CardView from 'react-native-cardview';
import Colors from '../constants/Colors';



export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizProgress: 0,
      score: 0,
    };
  }

  static navigationOptions = ( navigation ) => {
    //const { params = {} } = navigation.state;
    return ({
      title: 'Quiz',
    });
  };


  componentDidMount() {
    let quiz_data = require('../assets/quiz_data.json').quizzes;
    let quiz = quiz_data.find(q => { return q.quizName  === "sample quiz"});
    this.setState({
      quiz: quiz,
    });

    this.props.navigation.setParams({
      quiz: this.state.quiz,
    });
  }

  nextQuestion(answerText) {
    if (this.state.quizProgress+1 < this.state.quiz.questions.length) {
      let currQuestion = this.state.quiz.questions[this.state.quizProgress];
      let choice = currQuestion.answerChoices.find(choice => { return answerText === choice.answerText });
      let answerCorrect = choice.isCorrect;
      this.setState({
        quizProgress: this.state.quizProgress + 1,
        score: this.state.score + (answerCorrect ? 1 : 0),
      });
    } else {
      // presumably also need metrics for each question
      this.props.navigation.navigate('Results', {
        score: this.state.score,
        maxScore: this.state.quiz.questions.length,
      });
    }
  }



  render() {
    if (!this.state.quiz) return(<Text />);

    let answers = this.state.quiz.questions[this.state.quizProgress].answerChoices.map(choice => { return choice.answerText });
    let buttons = answers.map((answerText) => {
      return (
        <CardView
          key={answerText}
          style={styles.multipleChoiceOption}
          cardElevation={5}
          cornerRadius={10}
          cornerOverlap={false}
        >
          <TouchableOpacity title={answerText} onPress={() => this.nextQuestion(answerText)}>
            <Text style={styles.multipleChoiceButton}>{answerText}</Text>
          </TouchableOpacity>
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
        <Text>{this.state.score}</Text>
        <CardView
          style={styles.questionContainer}
          cardElevation={5}
          cornerRadius={10}
          cornerOverlap={false}
        >
        </CardView>
        <View style={styles.buttonContainer}>
          {buttons}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '0%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    height: '30%',
  },
  questionContainer: {
    position: 'absolute',
    bottom: '30%',
    backgroundColor: 'white',
    padding: 30,
    margin: '3%',
    width: '94%',
    height: '60%',
  },
  multipleChoiceOption: {
    backgroundColor: 'white',
    width: '44%',
    margin: '3%',
    padding: 15,
  },
  multipleChoiceButton: {
    fontSize: 24,
    color: Colors.appPrimary,
    textAlign: 'center',
    //fontWeight: 'bold',
  },
});
