import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import CardView from 'react-native-cardview';
import Colors from '../constants/Colors';
import Confetti from 'react-native-confetti';
import * as Progress from 'react-native-progress';

let quizData = require("../assets/quiz_data.json");

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score : this.props.navigation.getParam("score"),
      maxScore : this.props.navigation.getParam("maxScore"),
      expPointsInThisLevel: 100,
      progress : 0
    };

    // maybe move all of this into a componentDidMount()?
    // need some way to track whether they got it right or not, and what they need to work on
    // maybe make a "you got 1 right!" as a header and then
    // a list of whether you can do better in each category

    // need something that tracks what they put, but for now, assume all right
    //Object.keys(learningProgress).map(key =>  { return {key : learningProgress[key]}});
  }

  componentDidMount() {
    setTimeout(() => {this.showExperienceGained(70)}, 200); // this should be depend on score
  }

  componentWillUnmount() {
    this._confettiView.stopConfetti();
  }


  showExperienceGained(points){

    let progress = points / this.state.expPointsInThisLevel;

    this.setState({progress}, () => {
      if(this._confettiView) {
      this._confettiView.startConfetti();
   }});
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      //title: "Results",
      tabBarVisible: false,
      headerStyle: {
        height: 71,
        backgroundColor: Colors.header
      },
      headerLeft: (
        <TouchableOpacity
        onPress={() => navigation.navigate("Levels")}
        >
          <Image
            source={require("../assets/images/logos/CrushIt_LogoV2small.png")}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    //let currentQuiz = quizData["quizzes"][0]; // just the sample quiz for now

    // let learningProgress = {};
    // let correctAnswers = 0; // or XP or stars or something

    // for(let i = 0; i < currentQuiz.questions.length; i++ ){
    //     // check whether they got it right, assume for now they did
    //     correctAnswers++;

    //     if( currentQuiz.questions[i].learningCategory in learningProgress){
    //         learningProgress[currentQuiz.questions[i].learningCategory]++;
    //     } else {
    //         learningProgress[currentQuiz.questions[i].learningCategory] = 1;
    //     }
    // }

    // let flattenedData = Object.entries(learningProgress);

    // let categories = flattenedData.map((item) =>{
    //     //console.log(item);
    //     return (
    //     <Text key={item[0]}>{item[1]*10} points in the {item[0]} category</Text>
    //     )
    // })


    return (
      <View contentContainerStyle={styles.container}>
        <Confetti
          confettiCount={200}
          ref={node => (this._confettiView = node)}
        />
        <View style={styles.titleView}>
          {/* <Progress.Circle
            size={200}
            color={Colors.appPurple}
            progress={this.state.score / this.state.maxScore}
            showsText={true}
            formatText={(progress) => {return "Score";}}
            /> */}
          <Text style={styles.title}>
            Congrats, level completed!
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate("Levels")} // what should this be called/go back to
            title="Back to Levels"
            color={Colors.appPurple}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexWrap: "wrap-reverse",
    width: "100%"
  },
  child: {
    width: 300
  },
  titleView: {
    padding: "20%",
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 40,
    color: Colors.appPurple,
    margin: 20,

  },
  sliderStyle: {
    width: 300,
    marginTop: 40
  }
});
