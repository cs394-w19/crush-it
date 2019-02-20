import React from 'react';
import {FlatList, ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ProgressBar from 'react-native-progress/Bar';
import CardView from 'react-native-cardview';
import Colors from '../constants/Colors';
import Confetti from 'react-native-confetti';


let quizData = require("../assets/quiz_data.json");

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);


    // maybe move all of this into a componentDidMount()?
    // need some way to track whether they got it right or not, and what they need to work on
    // maybe make a "you got 1 right!" as a header and then
    // a list of whether you can do better in each category

    // need something that tracks what they put, but for now, assume all right
   //Object.keys(learningProgress).map(key =>  { return {key : learningProgress[key]}});
  }

  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
    title: 'Results',
    headerLeft: (
        <Button
            onPress={() => navigation.navigate('Quiz')} // what should this be called/go back to 
            title="Back"
            color={Colors.tintColor}
        />)
    ,};
  };


  render() {
    let currentQuiz = quizData["quizzes"][0]; // just the sample quiz for now

    let learningProgress = {};
    let correctAnswers = 0; // or XP or stars or something



    for(let i = 0; i < currentQuiz.questions.length; i++ ){
        // check whether they got it right, assume for now they did
        correctAnswers++;

        if( currentQuiz.questions[i].learningCategory in learningProgress){
            learningProgress[currentQuiz.questions[i].learningCategory]++;
        } else {
            learningProgress[currentQuiz.questions[i].learningCategory] = 1;
        }
    }

    let flattenedData = Object.entries(learningProgress);

    let categories = flattenedData.map((item) =>{
        //console.log(item);
        return (
        <Text key={item[0]}>You got {item[1]} points in the {item[0]} category</Text>
        )
    })

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Confetti 
          confettiCount={200} 
          ref={(node) => this._confettiView = node}
        />
        <View style={styles.titleView}>
            <Text style={styles.title}>You got 100 right!</Text>
        </View>
        {categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap-reverse',
    width: '100%',

  },
  child: {
    width: 300
  },
  titleView: {
    padding: 10,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 24,
    color: 'black'
  },
  sliderStyle: {
    width: 300,
    marginTop: 40
  },
});
