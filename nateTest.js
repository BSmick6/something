const readText = require('./readText');
const readImage = require('./readImage');
const formEvent = require('./formEvent');
const fileName1 = './test-images/poster1.jpg';
const fileName2 = './test-images/poster2.jpg';
const fileName3 = './test-images/poster3.jpg';
const fileName4 = './test-images/poster4.jpg';

//
// readImage(fileName1)
//   .then(txt=>readText(txt))
//   .then(info=>console.log("1",info,'\n\n\n')).catch(err=>{
//     console.log("ERR",err);
//   });
// readImage(fileName2)
//   .then(txt=>readText(txt))
//   .then(info=>console.log("2",info,'\n\n\n')).catch(err=>{
//     console.log("ERR",err);
// //   });
// readImage(fileName3)
//   .then(txt=>readText(txt))
//   .then(info=>console.log("3",info,'\n\n\n')).catch(err=>{
//     console.log("ERR",err);
//   });
readImage(fileName4)
  .then(txt=>readText(txt))
  .then(info=>console.log("4",info,'\n\n\n')).catch(err=>{
    console.log("ERR",err);
  });
