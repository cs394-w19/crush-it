import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import CoinHeader from "../components/Header/CoinHeader.js";
import LogoHeader from "../components/Header/LogoHeader.js";


export default class PartnerScreen extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        redeeming : 0, // if you are redeeming, you are trying to get your rewards
        points : 0,
        items: []
      };
  }

  componentDidMount() {
      let items = [ require("../assets/images/partners/amazon.jpg"),
                    require("../assets/images/partners/grubhub.jpg"),
                    require("../assets/images/partners/lyft.png"),
                    require("../assets/images/partners/starbucks.jpg"),
                    require("../assets/images/partners/target.jpg"),
                    require("../assets/images/partners/urban.jpg")
                  ];
      this.setState({ items });
  }

  static navigationOptions = ({ navigation }) => {
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
    let points = navigation.getParam("points", 0);

    let itemImages = this.state.items.map((im) => {
        return (
            <Image style={styles.image} source={im}/>
        );
    });

    if (this.state.redeeming ){
      return (
        <View
          contentContainerStyle={styles.container}
        >
          <View>
            <Text style={styles.title}>
              Almost there!
            </Text>
            <Text style={styles.title}>
              {500-points} coins away from your next reward!
            </Text>
            <Text style={styles.title}>
              The more you learn, the more $$ you earn!
            </Text>
          </View>

            <TouchableOpacity
              style = {styles.buttonStyle}
              onPress = {() => this.setState({redeeming:0})}
            >
              <Text style={styles.buttonWord}>RETURN HOME</Text>
            </TouchableOpacity>
        </View>
      );
    }
    return (
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <View>
          <Text style={styles.title}>
            Woohoo! You have  <Text style={{fontWeight: "bold", color : Colors.appPurple}}>{points}</Text> coins to spend!
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Earn coins & get a $5 e-gift card to your favorite shop! Choose from below!
          </Text>
        </View>
        <View style={{ height: "100%", width: "100%" }}>
          <TouchableOpacity
            style={styles.imageGrid}
            onPress = {()=>{ this.setState({redeeming:1})}}
          >
            {itemImages}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    width: "100%"
  },
  title: {
    fontSize: 30,
    color: Colors.darkGrayPurple,
    margin: 20,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.darkGrayPurple,
    margin: 20,
  },
  imageGrid : {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    flexWrap:"wrap",
    width: "100%",
    height: "100%",
    justifyContent : "center"

  },
  image : {
    width: 80,
    height: 80,
    margin : "5%",
  },
  buttonStyle : {
    backgroundColor : "#fff",
    width : "94%",
    borderColor: Colors.darkGrayPurple,
    borderRadius : 10,
    borderWidth : 2,
    margin: 10,
  },
  buttonWord : {
    fontSize : 24,
    color: Colors.darkGrayPurple,
    margin: 15,
    textAlign : "center",
    justifyContent : "center"
  }

});
