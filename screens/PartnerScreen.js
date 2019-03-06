import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image } from 'react-native';


import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default class ResultsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            points : this.props.navigation.getParam("points", 0),
            items: []
        };
    }

    componentDidMount() {
        let items = [require("../assets/images/partners/amazon.jpg"),
                            require("../assets/images/partners/grubhub.jpg"),
                            require("../assets/images/partners/lyft.png"), 
                            require("../assets/images/partners/starbucks.jpg"), 
                            require("../assets/images/partners/target.jpg"), 
                            require("../assets/images/partners/urban.jpg")];

        this.setState({ items });
      }

//   componentWillUnmount() {
//   }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      //title: "Results",
      tabBarVisible: false,
      headerStyle: {
        height: 71,
        backgroundColor: Colors.header
      },
      headerLeft: (
        <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/images/logos/CrushIt_LogoV2small.png")}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Text style={styles.headerStats}> 
          <Ionicons name="md-ribbon" size={32} color={Colors.lightGrayPurple} />   250
        </Text>
      )
    };
  };


  render() {

    let itemImages = this.state.items.map((im) => {
        return (<Image style={styles.image} source={im}/>);
    });

    return (
      <View 
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleView}>  
          <Text style={styles.title}>
            Woohoo! You have  <Text style={{fontWeight: "bold", color : Colors.appPurple}}>{this.state.points}</Text> coins to spend!
          </Text>
        </View>

        <View>  
          <Text style={styles.subtitle}>
            Earn coins & get a $5 e-gift card to your favorite shop! Choose from below!
          </Text>
        </View>
        <View style={styles.imagegrid}>
            {itemImages}
        
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
  child: {
    width: 300
  },
  titleView: {
    padding: "3%",
    alignItems: 'center',
    justifyContent: 'flex-end'
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
  headerStats: {
    color: Colors.lightGrayPurple,
    fontSize: 25,
    marginRight: 5
  },
  imagegrid : {
    flexDirection: 'row', 
    alignItems: "flex-start",
    flexWrap:"wrap",
  },
  image : {
    flex : 2,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }

});
