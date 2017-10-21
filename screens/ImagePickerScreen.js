import React from 'react';
import { connect } from 'react-redux';
import { CameraRoll, Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
<<<<<<< HEAD

const mapStateToProps = (state) => {
  return{
    image: state
  }
};
const mapDispatchToProps = (dispatch) => ({
  updatePhoto: (image) => {dispatch(update(image))}
});

class ImagePickerExample extends React.Component {
=======
import processor from '../processor';
export default class ImagePickerExample extends React.Component {
>>>>>>> 749a0b7665dfa228a29655cfb114e4ac4aa241e6
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
<<<<<<< HEAD
        <Button
          title="Take a new picture"
          onPress={this._takePhoto} />
      </View>
    );
  }
  _takePhoto = async () => {
    let result = await CameraRoll.saveToCameraRoll((Expo.ImagePicker.launchCameraAsync({})).uri);
    if(!result.cancelled){
      this.setState({image: result.uri});
    }
=======
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
    processor(this.state.image).then(a=>{
      console.log(a);
    })
>>>>>>> 749a0b7665dfa228a29655cfb114e4ac4aa241e6
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
ImagePickerExample = connect(mapStateToProps, mapDispatchToProps)(ImagePickerExample);

export default ImagePickerExample;
