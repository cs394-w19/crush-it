import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Tooltip } from "react-native-elements";

import Colors from "../../constants/Colors";

export default class MenuButton extends React.Component {

  render() {

    let labelText =  (
      <Text style={styles.listText}>{this.props.label}</Text>
    );

    let tooltipText = this.props.navigateTo === "Quiz" ?
      <Text>Complete previous level to unlock.</Text>
      :
      <Text>This module is unavailable</Text>;
      
    let tooltip = (
      <Tooltip
        width="90%"
        popover={tooltipText}
      >
        {labelText}
      </Tooltip>
    );

    let buttonIcon = this.props.available == 2 ?
      <Ionicons
        name="md-checkmark-circle"
        size={38}
        color={Colors.greenCheck}
      />
      :
      <FontAwesome
        name={this.props.available ? "unlock" : "lock"}
        size={38}
        color={Colors.lightGrayPurple}
      />;


    return(
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate(this.props.navigateTo, this.props.params)
          }
        >
          {this.props.available ? labelText : tooltip}
        </TouchableOpacity>
        <TouchableOpacity style={styles.lockStyle} disabled={true}>
          {buttonIcon}
        </TouchableOpacity>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "white",
    borderColor: Colors.darkGrayPurple,
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    margin: 5
  },
  lockStyle: {
    alignItems: "center",
    backgroundColor: "white",
    width: 50,
    margin: 10,
    justifyContent: "center"
  },
  buttonRow: {
    flexDirection: "row",
    margin: 8
  },
  disabledButtonStyle: {
    backgroundColor: "white",
    borderColor: Colors.lightGrayPurple,
    width: "94%",
    borderRadius: 10,
    borderWidth: 2,
    margin: 10
  },
  listText: {
    fontSize: 24,
    margin: 15,
    textAlign: "center",
    justifyContent: "center",
    color: Colors.darkGrayPurple
  },
  disabledText: {
    color: Colors.lightGrayPurple,
    fontSize: 24
  }
});
