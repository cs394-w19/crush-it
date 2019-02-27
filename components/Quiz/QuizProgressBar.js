import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import ProgressBar from "react-native-progress/Bar";
import Colors from "../../constants/Colors";

export default class QuizProgressBar extends React.Component {
  render() {
    let quizProgress = this.props.quizProgress;
    let length = this.props.length;

    return(
      <View style={styles.progressBarContainer}>
        <ProgressBar
            progress={(quizProgress + 1) / length}
            borderRadius={10}
            width={null}
            height={15}
            borderWidth={0}
            color={Colors.progressFilled}
            unfilledColor={Colors.progressUnfilled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 45,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "#f8f8f8"
  },
});
