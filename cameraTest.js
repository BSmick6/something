ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
    // format the image data
    const image = {
      uri: response.uri,
      type: 'image/jpeg',
      name: 'myImage' + '-' + Date.now() + '.jpg'
    }
    // Instantiate a FormData() object
    const imgBody = new FormData();
    // append the image to the object with the title 'image'
    body.append('image', image);
    const url = `http://your-api.com/image-upload`;
    // Perform the request. Note the content type - very important
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: imgBody
      }).then(res => res.json()).then(results => {
        // Just me assigning the image url to be seen in the view
        const source = { uri: res.imageUrl, isStatic: true };
        const images = this.state.images;
        images[index] = source;
        this.setState({ images });
    }).catch(error => {
      console.error(error);
    });
});
