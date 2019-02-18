import React from 'react';
import { ScrollView, StyleSheet, Button, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ProgressBar from 'react-native-progress/Bar';

import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizProgress: 0.1
    };
  }

  static navigationOptions = {
    title: 'Demo Quiz',
  };

  nextQuestion() {
    if (this.state.quizProgress < 0.99) {
      this.setState({
        quizProgress: this.state.quizProgress+0.1,
      });
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProgressBar
          progress={this.state.quizProgress}
          borderRadius={0}
          width={null}
          height={8}
          borderWidth={0}
          color={Colors.appPrimary}
        />
        <Text style={{fontSize: 30}}>
          This is question number {Math.round(this.state.quizProgress*10)}. What is the answer?
        </Text>
        <Button
          onPress={() => this.nextQuestion()}
          title="Option A"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option A"
        />
        <Button
          onPress={() => this.nextQuestion()}
          title="Option B"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option B"
        />
        <Button
          onPress={() => this.nextQuestion()}
          title="Option C"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option C"
        />
        <Button
          onPress={() => this.nextQuestion()}
          title="Option D"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option D"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});
