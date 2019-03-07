import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet
} from "react-native";

export default class CoinHeader extends React.Component {
  render() {
    return(
      <TouchableOpacity style={styles.coinsTotal} onPress={() => this.props.navigation.navigate("Partners", {points: this.props.navigation.getParam("points", 0)})}>
        <View style={{ flex: 1 }}>
          <Image
            style = {{ width : 25, height : 25, resizeMode: "contain" }}
            source={require("../../assets/images/coin.png")}
          />
        </View>
        <Text style = {{ flex: 1, fontSize: 18, color: "white", marginLeft: 5 }}>{this.props.navigation.getParam("points", 0)}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  coinsTotal: {
    flexDirection: "row",
    width: 60,
    height: 30,
    alignItems: "center",
    marginRight: 10
  },
});
