import React from 'react';
import { ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ProgressBar from 'react-native-progress/Bar';
import CardView from 'react-native-cardview';
import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizProgress: 0.1
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
    title: 'Demo Quiz',
    headerRight: (
        <Button
            onPress={() => navigation.navigate('Results')} // what should this be called/go back to 
            title="Results"
            color={Colors.tintColor}
        />)
    ,};
  };


  nextQuestion() {
    if (this.state.quizProgress < 0.99) {
      this.setState({
        quizProgress: this.state.quizProgress+0.1,
      });
    };
  }



  render() {

    let answers = ['a','b','c','d'];
    let buttons = answers.map((item) => {
        return (
          <CardView
            style={{
              backgroundColor: 'white',
              width: '40%',

            }}
            cardElevation={10}
            cornerRadius={10}
            cornerOverlap={false}
          >
            <View style={styles.child}>
              <View style={styles.titleView}>
                <Text style={styles.title}>{item}</Text>
              </View>            

          </View>
          </CardView>

          );
    });
    return (
      <ScrollView>

        
          
          
        
        <ProgressBar
          progress={this.state.quizProgress}
          borderRadius={0}
          width={null}
          height={8}
          borderWidth={0}
          color={Colors.appPrimary}
        />
        <Text style={{fontSize: 30}}>
          This is question number {Math.round(this.state.quizProgress*10)}. What is the answer?
        </Text>
        <View style={styles.container}>
        {buttons}
        </View>
        <Button
          onPress={() => this.nextQuestion()}
          title="Option A"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option A"
        />
        <Button
          onPress={() => this.nextQuestion()}
          title="Option B"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option B"
        />
        <Button
          onPress={() => this.nextQuestion()}
          title="Option C"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option C"
        />
        <Button
          onPress={() => this.nextQuestion()}
          title="Option D"
          color={Colors.appPrimary}
          accessibilityLabel="Click here for option D"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap-reverse',
    width: '90%',

  },
  child: {
    width: 300
  },
  titleView: {
    padding: 10,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  sliderStyle: {
    width: 300,
    marginTop: 40
  },
});
