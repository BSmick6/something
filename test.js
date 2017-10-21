const Vision = require('@google-cloud/vision');
const vision = Vision();
const fileName = './images/golf.jpg';
const readText = require('./readText');
let parsed;
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

<<<<<<< HEAD
    var RTpromise = new Promise(function(resolve,reject) {
      readText(detections,function(err,info){
        if (err) {
          reject(err)
        }
        resolve(info)
      })
    })
    RTpromise.then(info=>{
      parsed = {
        raw:detections,
        parsed: info,
      }
    })
=======
    // var RTpromise = new Promise(function(resolve,reject) {
    //   readText(detections,function(err,info){
    //     if (err) {
    //       reject(err)
    //     }
    //     resolve(info)
    //   })
    // })
    // RTpromise.then(info=>)
>>>>>>> 678a679877403a07edbbed2b4ec9129d3ccdecb2
    // parsed = readText(detections,function(err,info){
    //   if (err) throw err
    //   console.log(info);
    //   return info
    // });
    // console.log(detections);
<<<<<<< HEAD
    return parsed
=======
    // return {
    //   raw:detections,
    //   parsed: parsed,
    // };
    return detections
>>>>>>> 678a679877403a07edbbed2b4ec9129d3ccdecb2
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


module.exports = textDetect
