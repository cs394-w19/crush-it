import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Animated,
  ScrollView
} from 'react-native';

import Colors from '../constants/Colors';
import Confetti from 'react-native-confetti';

import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crushedIt: false,
      dailyGoalMet : false,
      splashAnimation: new Animated.Value(0),
      splashAnimationComplete: false,
    };
  }

  componentDidMount() {
    if (this._confettiView) {
      this._confettiView.startConfetti();
      this.myScroll.scrollTo({ x: 0, y: 0, animated: false });
    }
    const crushedIt = this.props.navigation.getParam("crushedIt", false);
    if (crushedIt) {
      this.setState({
        crushedIt: true,
        crushedScreen: true,
      });

      setTimeout(() => { this.setState({
          crushedScreen: false,
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    this._confettiView.stopConfetti();
  }

  renderCrushItImage = () => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          opacity: this.state.splashAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        }}>
        <Animated.Image
          source={require('../assets/images/splash.png')}
          style={{
            width: "100%",
            height: "100%",
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            resizeMode: 'cover',
            transform: [{
                scale: this.state.splashAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })
              }]
          }}
          onLoadEnd={this.animateOut}
        />
      </Animated.View>
    );
  };

  animateOut = () => {
    Animated.timing(this.state.splashAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ splashAnimationComplete: true });
      if (this._confettiView) {
        this._confettiView.startConfetti();
      }
    });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <LogoHeader navigation={navigation} navigateTo="Home" />
      ),
      headerRight: (
        <CoinHeader navigation={navigation} shouldSpin = {true}/>
      )
    };
  };

  render() {
    const { navigation } = this.props;
    const points = navigation.getParam("points", 0);
    const crushedIt = navigation.getParam("crushedIt", false);
    const dailyGoalMet = navigation.getParam("dailyGoalMet", false);

    const availabilities = navigation.getParam("availabilities", [[1]]);
    const categoryIndex = navigation.getParam("categoryIndex", 0);

    let levelCompleteText = crushedIt ? "All levels complete" : dailyGoalMet ? "Daily goal met": "Level complete";
    let crushedItMessage = crushedIt ? <Text style={{ fontSize:50, fontWeight:"bold", textAlign: 'center' }}>YOU CRUSHED IT!</Text>
                                     : <Text />;

    let keepGoing = (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Levels", {points: points, availabilites: availabilities, categoryIndex: categoryIndex})} // what should this be called/go back to
        style={styles.buttonStyle}>
        <Text style={styles.listText}> KEEP GOING</Text>
      </TouchableOpacity>
    );

    if (!this.state.splashAnimationComplete && this.state.crushedIt) {
      return this.renderCrushItImage();
    }

    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator ref={(ref) => this.myScroll = ref}>
        <Confetti
          confettiCount={200}
          ref={node => (this._confettiView = node)}
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {levelCompleteText}
          </Text>
          {crushedItMessage}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Partners",
            {
              points: points,
              availabilities: availabilities,
              categoryIndex: categoryIndex
            })}
          >
            <Image source={require("../assets/images/coin.png")} style={{width: 80, height: 80 }}/>
          </TouchableOpacity>
          <Text style={styles.title}>
            You earned 100 coins!
          </Text>
          {this.state.crushedIt ? <Text /> : keepGoing}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home", {points: points, availabilities: availabilities, categoryIndex: categoryIndex})} // what should this be called/go back to
            style={styles.buttonStyle}>
            <Text style={styles.listText}>RETURN HOME</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    paddingTop: "10%",
    paddingLeft: "14%",
    paddingRight: "14%",
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.darkGrayPurple,
    margin: 15,
    textAlign: 'center',
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
