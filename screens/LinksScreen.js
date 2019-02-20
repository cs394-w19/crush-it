import React from 'react';
import { ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ProgressBar from 'react-native-progress/Bar';
import CardView from 'react-native-cardview';
import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizProgress: 0.1
    };
  }

  static navigationOptions = {
    title: 'Quiz',
  };

  nextQuestion() {
    if (this.state.quizProgress < 0.99) {
      this.setState({
        quizProgress: this.state.quizProgress+0.1,
      });
    };
  }



  render() {

    let answers = ['option a','option b','option c','option d'];
    let buttons = answers.map((item) => {
      return (
        <CardView
          key={item}
          style={styles.multipleChoiceOption}
          cardElevation={10}
          cornerRadius={10}
          cornerOverlap={false}
        >
          <Button title={item} onPress={() => this.nextQuestion()}>
            <Text style={styles.multipleChoiceButton}>{item}</Text>
          </Button>
        </CardView>

        );
    });
    return (
      <View style={styles.quizContainer}>
        <ProgressBar
          progress={this.state.quizProgress}
          borderRadius={0}
          width={null}
          height={10}
          borderWidth={0}
          color={Colors.appPrimary}
        />
        <CardView
          style={styles.questionContainer}
          cardElevation={10}
          cornerRadius={10}
          cornerOverlap={false}
        >
          <Text style={{fontSize: 30}}>
            This is question number {Math.round(this.state.quizProgress*10)}. What is the answer?
          </Text>
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
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  questionContainer: {
    backgroundColor: 'white',
    padding: 30,
    margin: '3%',
    marginTop: '5%',
    height: '60%',
  },
  multipleChoiceOption: {
    backgroundColor: 'white',
    width: '44%',
    margin: '3%',
    padding: 10,
  },
  multipleChoiceButton: {
    fontSize: 30,
  },
});
