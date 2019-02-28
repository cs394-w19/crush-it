import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CardView from "react-native-cardview";
import Emoji from "react-native-emoji";

export default class QuizButton extends React.Component {
  render() {
    return (
      <View
        style={this.props.buttonStyle}
      >
        <Button
          title={this.props.text}
          color={this.props.buttonStyle.color}
          onPress={() => this.props.handleButtonPress()}
        >
          <Text style={styles.multipleChoiceButton}>{this.props.text}</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  multipleChoiceButton: {
    fontSize: 50,
    textAlign: "center",
    flex: 1
  }
});
