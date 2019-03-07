import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import CardView from 'react-native-cardview';
import Colors from '../constants/Colors';
import Confetti from 'react-native-confetti';
import * as Progress from 'react-native-progress';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score : this.props.navigation.getParam("score"),
      maxScore : this.props.navigation.getParam("maxScore"),
    };

    // maybe move all of this into a componentDidMount()?
    // need some way to track whether they got it right or not, and what they need to work on
    // maybe make a "you got 1 right!" as a header and then
    // a list of whether you can do better in each category

    // need something that tracks what they put, but for now, assume all right
    //Object.keys(learningProgress).map(key =>  { return {key : learningProgress[key]}});
  }

  componentDidMount() {
    setTimeout(() => {this.showExperienceGained(70)}, 200); // this should be depend on score
  }

  componentWillUnmount() {
    this._confettiView.stopConfetti();
  }

  showExperienceGained(points){

    let progress = points / this.state.expPointsInThisLevel;

    this.setState({progress}, () => {
      if(this._confettiView) {
      this._confettiView.startConfetti();
   }});
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <LogoHeader navigation={navigation} navigateTo="Home" />
      ),
      headerRight: (
        <CoinHeader navigation={navigation} />
      )
    };
  };

  render() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);

    return (
      <View
        contentContainerStyle={styles.container}
      >
        <Confetti
          confettiCount={200}
          ref={node => (this._confettiView = node)}
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>
            Congrats, Level Complete!
          </Text>
          <Image source={require("../assets/images/coin.png")} style={styles.coin}/>
          <Text style={styles.title}>
            You Earned 100 Coins!
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Levels", {points: points + 100})} // what should this be called/go back to
            style={styles.buttonStyle}>
            <Text style={styles.listText}> KEEP GOING</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home", {points: points + 100})} // what should this be called/go back to
            style={styles.buttonStyle}>
            <Text style={styles.listText}>RETURN HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexWrap: "wrap-reverse",
    width: "100%"
  },
  titleView: {
    paddingTop: "10%",
    paddingLeft: "15%",
    paddingRight: "15%",
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.darkGrayPurple,
    margin: 15,
    textAlign: 'center',
  },
  coin: {
    width: 80,
    height: 80,
  },
  buttonStyle: {
    backgroundColor: "white",
    width: "100%",
    borderColor: Colors.darkGrayPurple,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  listText: {
    fontSize: 24,
    margin: 15,
    textAlign: "center",
    justifyContent: "center",
    color: Colors.darkGrayPurple,
  },
});
