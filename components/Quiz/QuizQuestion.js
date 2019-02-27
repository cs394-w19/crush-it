import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";


export default class QuizQuestion extends React.Component {
  render() {
    let image = this.props.source;
    let quiz = this.props.quiz;
    let question = this.props.question;

    return(
      <View
        style={styles.questionContainer}
      >
        <Image
            source={image}
            style={{flex: 1,
                width: 275,
                resizeMode: 'contain'}}
          />

        <Text style={{ fontSize: 20, color: "white"}}>
          {quiz.questions[question].questionText}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  questionContainer: {
    top: "1%",
    backgroundColor: "#c3c3c3",
    padding: 15,
    margin: "3%",
    width: "94%",
    height: "75%", 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
