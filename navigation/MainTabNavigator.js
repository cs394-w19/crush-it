import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from "../screens/ResultsScreen";
import LevelScreen from "../screens/LevelScreen";
import HomeScreen from '../screens/HomeScreen';
import PartnerScreen from "../screens/PartnerScreen";

import Colors from "../constants/Colors";
import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

const QuizStack = createStackNavigator(
  {
    Quiz: QuizScreen,
    Results: ResultsScreen,
    Levels: LevelScreen,
    Home: HomeScreen,
    Partners: PartnerScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      tabBarVisible: false,
    },
    defaultNavigationOptions: {
      headerStyle: {
        height: 71,
        backgroundColor: Colors.header
      },
    }
  }
);


export default createBottomTabNavigator({
  QuizStack,
});
