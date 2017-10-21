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

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  static navigationOptions = {
    title: 'Register'
  };
  postLogin() {
  console.log('hhhhhhhh');
    return fetch(`${domain}/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        /* do something with responseJson and go back to the Login view but
         * make sure to check for responseJson.success! */
        if (responseJson.success === true) {
          this.props.navigation.goBack()
        } else {
          alert('invalid')
        }
        console.log(responseJson)
      })
      .catch((err) => {
        /* do something if there was an error with fetching */
        console.log('it errored')
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder = "Username"
          onChangeText={(text) => this.setState({username: text})} />
        <TextInput
          style={styles.input}
          placeholder = "Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})} />
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postLogin()} }>
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default RegisterScreen;
