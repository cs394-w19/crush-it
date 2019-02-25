import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";

import CardView from "react-native-cardview";

export default class QuizButtons extends React.Component {

  render() {

    return (
      <CardView
        style={this.props.buttonStyle}
        cardElevation={5}
        cornerRadius={10}
        cornerOverlap={false}
      >
        <Button
          title={this.props.text}
          color={this.props.buttonStyle.color}
          onPress={() => this.props.handleButtonPress()}
        >
          <Text style={styles.multipleChoiceButton}>{this.props.text}</Text>
        </Button>
      </CardView>
    );
  }
}


const styles = StyleSheet.create({
  multipleChoiceButton: {
    fontSize: 24,
    textAlign: "center"
  },
});
