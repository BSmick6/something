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

class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Messages' //you put the title you want to be displayed here
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentWillMount() {
    fetch(`${domain}/events`)
    .then((response) => {
      console.log('RESPONSE', response);
      return response.json()
    })
    .then((responseJson) => {
      if (responseJson.success === true) {
        console.log('RESPONSE JSON events', responseJson);
        this.setState({dataSource: responseJson.events})
      } else {
        alert('invalid')
      }
      console.log(responseJson)
    })
    .catch((err) => {
      console.log(err)
      console.log('it errored')
    });
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View style={styles.containerFull}>
        <Text style={styles.textBig}>Events</Text>
        <ListView
          dataSource={ds.cloneWithRows(this.state.dataSource)}
          renderRow={(rowData) =>
            <View style={styles.container}>
              <Text>{rowData.displayName}</Text>
              <Text>{rowData.eventLocation}</Text>
              <Text>{rowData.eventDescription}</Text>
            </View>
          }
        />
      </View>
    )
  }
}

export default EventsScreen;
