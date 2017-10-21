// const Vision = require('@google-cloud/vision');
// const vision = Vision();
// const fileName = './images/golf.jpg';
// const readText = require('./readText');
// let parsed;
// //const gcsPath = `gs://${bucketName}/${fileName}`;
// //vision.textDetection({ source: { imageUri: gcsPath } })
// // function extractEmails (text){
// //   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// // }
// // function extractPhone (text){
// //   return text.match(/(([a-zA-Z0-9._-])+-[a-zA-Z0-9._-]+-[a-zA-Z0-9._-]+)/gi);
// // }
// function textDetect(path){
//   let detections;
//   vision.textDetection({source: {filename: path}})
//   .then((results) => {
//     detections = results[0].fullTextAnnotation.text;
//
//     // var RTpromise = new Promise(function(resolve,reject) {
//     //   readText(detections,function(err,info){
//     //     if (err) {
//     //       reject(err)
//     //     }
//     //     resolve(info)
//     //   })
//     // })
//     // RTpromise.then(info=>)
//     // parsed = readText(detections,function(err,info){
//     //   if (err) throw err
//     //   console.log(info);
//     //   return info
//     // });
//     // console.log(detections);
//     // return {
//     //   raw:detections,
//     //   parsed: parsed,
//     // };
//     return detections
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });
// }
//
//
// function logoDetect(path){
//   vision.logoDetection({ source: { filename: path } })
//   .then((results) => {
//     const logos = results[0].logoAnnotations;
//     console.log('Logos:');
//     logos.forEach((logo) => console.log(logo));
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });
// }
// // logoDetect(fileName);
// const a = textDetect(fileName);
// // console.log("RAW",a.raw);
// // console.log("parsed",a.parsed);
//
//
// module.exports = textDetect


var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/calendar-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Lists the next 10 events on the user's primary calendar.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
  var calendar = google.calendar('v3');
  calendar.events.list({
    auth: auth,
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var events = response.items;
    if (events.length == 0) {
      console.log('No upcoming events found.');
    } else {
      console.log('Upcoming 10 events:');
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var start = event.start.dateTime || event.start.date;
        console.log('%s - %s', start, event.summary);
      }
    }
  });
}
