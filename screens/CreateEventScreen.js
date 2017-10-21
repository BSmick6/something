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

class CreateEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        displayName: '',
        eventDate: '',
        eventLocation: '',
        eventDescription: ''
    }
  }
  static navigationOptions = {
    title: 'CreateEvent'
  };
  postCreateEvent() {
  console.log('creating event');
  return fetch(`${domain}/create`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          eventDate: this.state.eventDate,
          eventLocation: this.state.eventLocation,
          eventDescription: this.state.eventDescription
      })
    })
    .then((response) => {
        console.log('RESPONSE', response)
        response.json()
    })
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
      console.log('responseJson',responseJson);
      if (responseJson.success === true) {
        console.log('RESPONSE EVENT', response)
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
          <Text>Create an event.</Text>
          <TextInput
            style={styles.input}
            placeholder = "When is it?"
            onChangeText={(text) => this.setState({eventDate: text})} />
          <TextInput
            style={styles.input}
            placeholder = "Location"
            onChangeText={(text) => this.setState({eventLocation: text})} />
            <TextInput
              style={styles.input}
              placeholder = "Description"
              onChangeText={(text) => this.setState({eventDescription: text})} />
          <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postCreateEvent()} }>
            <Text style={styles.buttonLabel}>Post Your Event</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

export default CreateEventScreen;
