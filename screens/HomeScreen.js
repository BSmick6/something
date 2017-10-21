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
    title: 'Home',
    header: null
  };

  press() {
    this.props.navigation.navigate('Login');
  }

  register() {
    this.props.navigation.navigate('Register');
  }
  google(){
    // this.props.navigation.navigate('Swiper');
    // return fetch(`${domain}/auth/google`, {
    //   method: 'GET',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username: ,
    //   })
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.success) {
    //       AsyncStorage.setItem('user', JSON.stringify(responseJson.user));
    //       this.props.navigation.navigate('Swiper');
    //     } else {
    //       alert('Invalid credentials bruh');
    //     }
    //   })
    //   .catch((err) => {
    //     /* do something if there was an error with fetching */
    //     console.log('it errored', err)
    //   });
  }
  componentWillMount() {
    AsyncStorage.getItem('user')
    .then((result) => {
      if(result) {
        this.props.navigation.navigate('Swiper')
      } else {
        console.log('no user loser');
      }
    })
  }

  render() {
    return (
      <View style={styles.containerFull}>
        <Text style={styles.textBig}>Something</Text>
        <View>
          <TouchableOpacity
            onPress={ () => {this.press()} }
            style={[styles.button, styles.buttonBlue]}>
            <Text style={styles.buttonLabel}>Tap to Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={ () => {this.register()} }
            style={[styles.button, styles.buttonBlue]}>
            <Text style={styles.buttonLabel}>Tap to Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={ () => {this.google()} }
            style={[styles.button, styles.buttonBlue]}>
            <Text style={styles.buttonLabel}>Tap to login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomeScreen;
