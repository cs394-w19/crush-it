import React from "react";
import {
  TouchableOpacity,
  Image,
} from "react-native";

export default class LogoHeader extends React.Component {
  render() {
    let navigation = this.props.navigation;

    return(
      <TouchableOpacity onPress={() => navigation.navigate(this.props.navigateTo, {points: navigation.getParam("points", 0)})}>
        <Image
          source={require("../../assets/images/logos/CrushIt_LogoV2small.png")}
        />
      </TouchableOpacity>
    );
  }
};
