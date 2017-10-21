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

class MessagesScreen extends React.Component {
  static navigationOptions = {
    title: 'Messages' //you put the title you want to be displayed here
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    fetch(`${domain}/events`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === true) {
          console.log('RESPONSE JSON events', responseJson)
          console.log('ds', ds)
          this.setState({dataSource: ds.cloneWithRows(responseJson.messages)})
        } else {
          alert('invalid')
        }
        console.log(responseJson)
      })
      .catch((err) => {
        console.log(err)
        console.log('it errored MMMMM')
      });
  }
  // componentDidMount() {
  //   this.props.navigation.setParams({
  //     onRightPress: yourHandlerFunctionGoesHere
  //   })
  // }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.props.navigation.navigate('Create');} }>
            <Text style={styles.buttonLabel}>Create Event</Text>
        </TouchableOpacity>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity>
              <Text>{rowData.from.username}</Text>
              <Text>{rowData.to.username}</Text>
              <Text>{rowData.timestamp}</Text>
            </TouchableOpacity>
          }
        />

      </View>
    )
  }
}

export default MessagesScreen;
