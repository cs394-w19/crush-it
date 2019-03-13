import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Animated,
  Easing
} from "react-native";

export default class CoinHeader extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0)
  };

  componentDidMount() {
    this.spin()
  }

  spin() {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 4,
      duration: 4000,
      easing: Easing.linear
    }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    let coinImage = null

    if (this.props.shouldSpin){
      coinImage = <Animated.Image source={require("../../assets/images/coin.png")} style={{width: 35, height: 35, resizeMode: "contain", transform: [{rotate: spin}] }}/>;
    } else {
      coinImage = <Image source={require("../../assets/images/coin.png")} style={{width: 35, height: 35, resizeMode: "contain"}}/>

    }

    return(


      <TouchableOpacity style={styles.coinsTotal} onPress={() => this.props.navigation.navigate("Partners",
      {
        points: this.props.navigation.getParam("points", 0),
        availabilities: this.props.navigation.getParam("availabilities", [[1]]),
        categoryIndex: this.props.navigation.getParam("categoryIndex", 0)
      })}>
        <View style={{ flex: 1 }}>
          {coinImage}
        </View>
        <Text style = {{ flex: 1, fontSize: 20, color: "white", marginLeft: 10 }}>{this.props.navigation.getParam("points", 0)}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  coinsTotal: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    marginRight: 15
  },
});
