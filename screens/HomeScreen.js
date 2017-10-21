import React from 'react';
import {
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
const domain = "https://something-horizons.herokuapp.com";
import styles from '../styles/styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  press() {
    this.props.navigation.navigate('Login');
  }

  register() {
    this.props.navigation.navigate('Register');
  }

  componentWillMount() {
    AsyncStorage.getItem('user')
    .then((result) => {
      if(result) {
        this.props.navigation.navigate('Users')
      } else {
        console.log('no user loser');
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={ () => {this.press()} }
          style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonLabel}>Tap to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={ () => {this.register()} }
          style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonLabel}>Tap to Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen;
