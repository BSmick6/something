const Vision = require('@google-cloud/vision');
const vision = Vision();
const fileName = './images/golf.jpg';

//const gcsPath = `gs://${bucketName}/${fileName}`;
//vision.textDetection({ source: { imageUri: gcsPath } })
function extractEmails (text){
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
function extractPhone (text){
  return text.match(/(([a-zA-Z0-9._-])+-[a-zA-Z0-9._-]+-[a-zA-Z0-9._-]+)/gi);
}
function textDetect(path){
  let detections;
  vision.textDetection({source: {filename: path}})
  .then((results) => {
    detections = results[0].fullTextAnnotation.text;
    console.log(detections);
    console.log(extractEmails(detections));
    console.log('0',extractPhone(detections));
    return detections;
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
}
function logoDetect(path){
  vision.logoDetection({ source: { filename: path } })
  .then((results) => {
    const logos = results[0].logoAnnotations;
    console.log('Logos:');
    logos.forEach((logo) => console.log(logo));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
}
logoDetect(fileName);
textDetect(fileName);
