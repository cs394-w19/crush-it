import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from "../screens/ResultsScreen";
import LevelScreen from "../screens/LevelScreen";


const QuizStack = createStackNavigator(
  {
    Quiz: QuizScreen,
    Results: ResultsScreen,
    Levels: LevelScreen
  },
  {
    initialRouteName: 'Quiz',
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);



export default createBottomTabNavigator({
  QuizStack,
});
