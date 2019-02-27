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
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor: "#c3c3c3"}}>
        <Image
          source={image}
          style={{width:200,height:200}}
          resizeMode={"contain"}
        />
          <Text style={{ fontSize: 80, color: "white" }}>
            {quiz.questions[question].questionText}
          </Text>
      </View>
    );
  }
}