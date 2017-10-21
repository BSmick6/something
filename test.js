const Vision = require('@google-cloud/vision');
const vision = Vision();
const fileName = './images/golf.jpg';
const readText = require('./readText');

//const gcsPath = `gs://${bucketName}/${fileName}`;
//vision.textDetection({ source: { imageUri: gcsPath } })
// function extractEmails (text){
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }
// function extractPhone (text){
//   return text.match(/(([a-zA-Z0-9._-])+-[a-zA-Z0-9._-]+-[a-zA-Z0-9._-]+)/gi);
// }
function textDetect(path){
  let detections;
  vision.textDetection({source: {filename: path}})
  .then((results) => {
    detections = results[0].fullTextAnnotation.text;

    var RTpromise = new Promise(function(resolve,reject) {
      readText(detections,function(err,info){
        if (err) {
          reject(err)
        }
        resolve(info)
      })
    })
    RTpromise.then(info=>)
    // parsed = readText(detections,function(err,info){
    //   if (err) throw err
    //   console.log(info);
    //   return info
    // });
    console.log(parsed);
    // console.log(detections);
    return {
      raw:detections,
      parsed: parsed,
    };
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
// logoDetect(fileName);
const a = textDetect(fileName);
// console.log("RAW",a.raw);
// console.log("parsed",a.parsed);
