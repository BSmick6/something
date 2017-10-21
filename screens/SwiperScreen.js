import React from 'react';
import { View, Text } from 'react-native';
import CreateEventScreen from './CreateEventScreen';
import ImagePickerScreen from './ImagePickerScreen';
import SaveScreen from './SaveScreen';
import Swiper from 'react-native-swiper';
import styles from '../styles/styles.js';
const domain = "https://something-horizons.herokuapp.com";

class SwiperScreen extends React.Component {
  static navigationOptions = {
    title: 'Something',
    headerStyle: { marginTop: 25 },
  };

  componentWillUnmount() {
    fetch(`${domain}/logout`)
    .then(resp => resp.json())
    .then(respJson => {
      if (respJson.success) {
        console.log(respJson.message);
      } else {
        console.log('ERROR LOGGING OUT');
      }
    })
    .catch(err => {
      console.log('ERROR', err);
    })
  }

  render() {
    return (
      <Swiper style={styles.container} showsPagination={false}>
        <CreateEventScreen />
        <ImagePickerScreen />
        <SaveScreen />
      </Swiper>
    )
  }
}

export default SwiperScreen;
