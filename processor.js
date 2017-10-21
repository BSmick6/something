const readText = require('./readText');
const readImage = require('./readImage');
const formEvent = require('./formEvent');
const sendEvent = require('./sendEvent');
//THIS IS WHATEVER FILE YOU WOULD LIKE TO PROCESS
const fileName = './images/vevo.jpg';

readImage(fileName)
  .then(txt=>{
    //FILE TURNED INTO RAW TEXT
    var example = 'San Fran March 16 Jerry and Beth 2:00 pm'
    return readText(txt)
  }).then(info=>{
    //TEXT TURNED INTO INFO OBJECT
    var example = {
      people: ['Jerry', 'Beth'],
      time: ['March 16', '2 pm'],
      place: ['San Francisco','CA']
    }
    return formEvent(info)
  }).then(evt=>{
    //INFO BECOMES EVENT OBJ FOR GOOGLE

    return sendEvent(evt,calendarID)
  }).catch(err=>{
    console.log("ERR",err);
  });
