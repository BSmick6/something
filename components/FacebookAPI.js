import React from 'react';
import { Text, View } from 'react-native';
import {Facebook, FacebookApiException} from 'fb';
var fb = new Facebook(options);

export default class FacebookAPI extends React.Component {

  componentWillMount() {
    console.log(fb);
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
