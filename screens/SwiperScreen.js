import React from 'react';
import { View, Text } from 'react-native';
import CreateEventScreen from './CreateEventScreen';
import ImagePickerScreen from './ImagePickerScreen';
import Swiper from 'react-native-swiper';
import styles from '../styles/styles.js';

class SwiperScreen extends React.Component {
  static navigationOptions = {
    title: 'Something',
    headerStyle: { marginTop: 25 },
  };

  render() {
    return (
      <Swiper style={styles.container} showsPagination={false}>
        <CreateEventScreen />
        <ImagePickerScreen />
      </Swiper>
    )
  }
}

export default SwiperScreen;
