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


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  };
  static navigationOptions = {
    title: 'Login'
  };
  press() {
    this.props.navigation.navigate('RealLogin');
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
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log('IMAGE PICKED', result);

    if (!result.cancelled) {
      console.log('did it get here')
      console.log('result inside here', result)
      console.log('THIS.STATE.IMAGE', this.state.image)
      this.setState({image: result.uri})
      console.log('THIS.STATE.IMAGE2', this.state.image)
    }
  };
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
        <Text style={styles.textBig}></Text>
        <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonLabel}>Tap to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Tap to Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.postFb()} }>
          <Text style={styles.buttonLabel}>Login With Facebook</Text>
        </TouchableOpacity>
        <Button
            title="Pick an image from camera roll"
            onPress={ () => {this._pickImage()} }
        />
        { console.log('CONSOLE IN RENDER', this.state.image) }
        {this.state.image &&
          <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
      </View>
    )
  }
}
