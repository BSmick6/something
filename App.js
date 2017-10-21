import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SwiperScreen from './screens/SwiperScreen';
const domain = "https://something-horizons.herokuapp.com";
//const domain = "https://hohoho-backend.herokuapp.com"; // Old Server

//Navigator
export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Swiper: {
    screen: SwiperScreen,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen'
});
