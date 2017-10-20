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


class UsersScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Users',
      headerRight: (<Button title='Messages' onPress={() => navigation.navigate('Messages')} />),
    }
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    fetch('https://hohoho-backend.herokuapp.com/users')
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
  touchUser(user) {
  console.log('touch user');
    return fetch('https://hohoho-backend.herokuapp.com/messages', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: user._id,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === true) {
          Alert.alert(
           'Success',
           'Your HO HO HO ' + user.username + ' has been sent',
           [{text: 'Dismiss Button'}] // Button
          )
        } else {
          alert('did not send')
        }
        console.log(responseJson)
      })
      .catch((err) => {
        /* do something if there was an error with fetching */
        console.log('it errored')
      });
  }
  longTouchUser(user, lat, long) {
  console.log('long touch user');
    return fetch('https://hohoho-backend.herokuapp.com/messages', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: user._id,
          location: {
            longitude: long,
            latitude: lat
          }
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === true) {
          console.log('respone', responseJson)
          console.log('LOCATION', location)
          Alert.alert(
           'Success',
           'Your HO HO HO ' + user.username + ' has been sent',
           [{text: 'Dismiss Button'}] // Button
          )
        } else {
          alert('did not send')
        }
        console.log(responseJson)
      })
      .catch((err) => {
        /* do something if there was an error with fetching */
        console.log('it errored')
      });
  }
  sendLocation = async(user) => {

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      //handle failure
      alert('Sorry this app cannot do cool things now.')
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true});
    this.longTouchUser(user, location.coords.latitude, location.coords.longitude);
    console.log('kasdfksjf;slf')
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity
              onPress={this.touchUser.bind(this, rowData)}
              onLongPress={this.sendLocation.bind(this, rowData)}
              delayLongPress={100} >
              <Text>{rowData.username}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}
