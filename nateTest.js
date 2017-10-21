const readText = require('./readText');
const readImage = require('./readImage');

const fileName = './images/golf.jpg';



readImage(fileName)
  .then(txt=>readText(txt))
  .then(out=>{
    console.log(out);
  }).catch(err=>{
    console.log(err);
  });
