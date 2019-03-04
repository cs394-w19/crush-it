import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import Colors from "../../constants/Colors";

export default class QuizQuestion extends React.Component {
  render() {
    let image = this.props.source;
    let quiz = this.props.quiz;
    let question = this.props.question;

    return(
      <View style={styles.questionContainer}>
        <Image
          source={image}
          style={{width:250,height:200}}
          resizeMode={"contain"}
        />
          <Text style={{ fontSize: 24, color: Colors.darkGrayPurple, paddingTop: 20}}>
            {quiz.questions[question].question}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    padding: 25
  },
});
