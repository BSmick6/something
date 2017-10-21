import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ImagePicker, Location, Permissions, MapView } from 'expo';
const domain = "https://something-horizons.herokuapp.com";
import styles from '../styles/styles';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  };
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
  postFb() {
  console.log('hhhhhhhh');
    return fetch('https://fb/login')
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success === true) {
            console.log('ds', ds)

          } else {
            alert('invalid')
          }
          console.log(responseJson)
        })
        .catch((err) => {
          console.log('it errored')
        });
  }
  componentDidMount() {
      AsyncStorage.getItem('user')
        .then((result) => {
          console.log(result);
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
        <Text style={styles.textBig}>UBUSY</Text>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postFb()} }>
          <Text style={styles.buttonLabel}>Login With Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen;
