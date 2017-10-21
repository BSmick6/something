import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
// import processor from '../processor';
export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          {
            (this.state.image)?
            <Button
              title="Turn into event"
              onPress={this.submit.bind(this)}
            />
            :<View/>}
      </View>
    );
  }
  submit() {
    console.log(this.state.image);
    // processor(this.state.image).then(a=>{
    //   console.log(a);
    // })
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
