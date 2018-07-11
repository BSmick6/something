import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  takePicture = async function() {
    // this.camera.takePictureAsync({width:128, height:128})
    // .then(data => {
    //   var options = {
    //     method: 'POST',
    //     url: 'https://shielded-brook-82299.herokuapp.com/image',
    //     body: {
    //       data: JSON.stringify(data)
    //     }
    //   };
    //   request(options, function(error, response, body) {
    //     body = JSON.parse(body);
    //     if (error) {
    //       reject(error)
    //     }
    //   })
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
    if (this.camera) {
      this.camera.takePictureAsync({base64: true, quality: .01})
      .then(data => {
        console.log(data);
        fetch('https://shielded-brook-82299.herokuapp.com/image', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: data.base64
        })
        .then((d) => {
          console.log("event",d);
        })
        .catch((err)=>{
          console.log('fetch failed',err);
        });
      }).catch((err) => {
        console.log(err);
      })
    }
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {this.camera = ref;}}
            style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.flipButton,
                  styles.picButton,
                  { flex: 0.3, alignSelf: 'flex-end' },
                ]}
                onPress={this.takePicture.bind(this)}>
                <Text style={styles.flipText}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
  },
  navigation: {
    flex: 1,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  item: {
    margin: 4,
    backgroundColor: 'indianred',
    height: 35,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  galleryButton: {
    backgroundColor: 'indianred',
  },
  row: {
    flexDirection: 'row',
  },
});
