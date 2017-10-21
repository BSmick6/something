
_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  console.log('IMAGE PICKED', result);

  if (!result.cancelled) {
    console.log('did it get here')
    console.log('result inside here', result)
    console.log('THIS.STATE.IMAGE', this.state.image)
    this.setState({image: result.uri})
    console.log('THIS.STATE.IMAGE2', this.state.image)
  }
};

<Button
    title="Pick an image from camera roll"
    onPress={ () => {this._pickImage()} }
/>
{ console.log('CONSOLE IN RENDER', this.state.image) }
{this.state.image &&
  <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
