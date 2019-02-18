import React from 'react';
import ProgressBar from 'react-native-progress/Bar';

import Colors from '../constants/Colors';

export default class QuizProgressBar extends React.Component {
  render() {
    return (
      <Progress.Bar progress={0.3} width={200} />
    );
  }
}
