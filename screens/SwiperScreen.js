import React from 'react';
import { View, Text } from 'react-native';
import CreateEventScreen from './CreateEventScreen';
import ImagePickerScreen from './ImagePickerScreen';
<<<<<<< HEAD
import CameraScreen from './CameraScreen';
import EventsScreen from './EventsScreen';
=======
import Camera from './Camera';
>>>>>>> 8cc04a7c6bbfc633d5312ba3bcbf9608aa8dce13
import Swiper from 'react-native-swiper';
import styles from '../styles/styles.js';
import reducers from '../reducers/reducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(reducers);

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
<<<<<<< HEAD
      <Swiper style={styles.container} showsPagination={false}>
        <CreateEventScreen />
        <EventsScreen />
        <ImagePickerScreen />
        <CameraScreen />
      </Swiper>
=======
      <Provider store={store}>
        <Swiper>
          <ImagePickerScreen />
          <CreateEventScreen />
          <Camera />
        </Swiper>
      </Provider>
>>>>>>> 8cc04a7c6bbfc633d5312ba3bcbf9608aa8dce13
    )
  }
}

export default SwiperScreen;
