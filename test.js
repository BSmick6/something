// Imports the Google Cloud client libraries
const Vision = require('@google-cloud/vision');

// Instantiates clients
const vision = Vision();

// The name of the bucket where the file resides, e.g. "my-bucket"
// const bucketName = 'horizons-image-bucket';
// const rbucketName = 'horizons-text-bucket';
// The path to the file within the bucket, e.g. "path/to/image.png"
const fileName = '../../Pictures/event.jpg';

//const gcsPath = `gs://${bucketName}/${fileName}`;

// Performs text detection on the gcs file
//vision.textDetection({ source: { imageUri: gcsPath } })

function textDetect(path){
  //let text =[];
  vision.textDetection({source: {filename: path}})
  .then((results) => {
    const detections = results[0].textAnnotations;

    console.log(results[0].fullTextAnnotation.text);
    console.log('Text:');
    //detections.forEach((text) => console.log(text));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
}

textDetect(fileName);
