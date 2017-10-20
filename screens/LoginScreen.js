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


class RealLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    }
  }
  static navigationOptions = {
    title: 'RealLogin'
  };
  postSignin() {
  console.log('signing in');
  return fetch('https://hohoho-backend.herokuapp.com/login')
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        console.log('ds', ds)
        this.setState({dataSource: ds.cloneWithRows(responseJson.users)})
      } else {
        alert('invalid')
      }
      console.log(responseJson)
    })
    .catch((err) => {
      console.log('it errored')
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>{this.state.message}</Text>
          <TextInput
            style={styles.input}
            placeholder = "Username"
            onChangeText={(text) => this.setState({username: text})} />
          <TextInput
            style={styles.input}
            placeholder = "Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password: text})} />
          <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postSignin()} }>
            <Text style={styles.buttonLabel}>Login</Text>
          </TouchableOpacity>
        </View>
    )
  }
}
