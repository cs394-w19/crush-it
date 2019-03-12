import React from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity} from "react-native";

import Colors from "../../constants/Colors";
import Emoji from "react-native-emoji";

export default class QuizButton extends React.Component {
  render() {
    return (
        <TouchableOpacity
          style={this.props.buttonStyle}
          onPress={() => this.props.handleButtonPress()}
        >
          <Text style={styles.multipleChoiceButton}><Emoji name={this.props.emoji} style={{fontSize: 40}} />{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  multipleChoiceButton: {
    fontSize: 24,
    margin: 15,
    textAlign: "center",
    justifyContent: "center",
    color: Colors.darkGrayPurple,
  }
});
