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
          style={styles.image}
          resizeMode={'contain'}
        />
          <Text style={{ fontSize: 20, color: "white" }}>
            {quiz.questions[question].questionText}
          </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: "#c3c3c3",
    padding: 15,
    flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // maxHeight: "50%",
    // maxWidth: "100%",
    width: "80%",
  },
  textContainer: {
    // width: "100%",
    // height: "auto",
  }
});
