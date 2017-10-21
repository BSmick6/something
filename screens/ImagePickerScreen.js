import React from 'react';
import { connect } from 'react-redux';
import { CameraRoll, Button, Image, View } from 'react-native';
import { Camera, ImagePicker } from 'expo';

const mapStateToProps = (state) => {
  return{
    image: state
  }
};
const mapDispatchToProps = (dispatch) => ({
  updatePhoto: (image) => {dispatch({type: "UPDATE", image: image})}
});

class ImagePickerExample extends React.Component {
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
        <Button
          title="Take a new picture"
          onPress={this._takePhoto} />
      </View>
    );
  }
  _takePhoto = async () => {
    let result = await CameraRoll.saveToCameraRoll(Expo.ImagePicker.launchCameraAsync({
    }));
    console.log(result);
    if(!result.cancelled){
        console.log(result);
      this.props.updatePhoto(result.uri);
      this.setState({image: result.uri});
    }
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
