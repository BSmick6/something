var chrono = require('chrono-node');
var parse = require('parse-messy-schedule');

function formEvent(info) {
  new Promise(function(resolve, reject) {
    const dates = info.time.map(time=>chrono.parseDate(time));
    const dateStart = dates.reduce((actual,next)=>{
      if (!next) return actual
      return (actual>next)?actual:next
    })
    const dateEnd = dates.reduce((actual,next)=>{
      if (!next) return actual
      return (actual<next)?actual:next
    })
    const recurrence = parse(info.time.join(', '));
    if (recurrence._every.every) {

    }
    console.log("RECURRENCE",recurrence,"\n\n\n\n\n");
    var event = {
      'summary': "SOME SHIT HERE",
      'location': info.place.join(),
      'description': 'A chance to hear more about Google\'s developer products.',
      'start': {
        'dateTime': dateStart,
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': dateEnd,
        'timeZone': 'America/Los_Angeles'
      },
      'recurrence': ['RRULE:FREQ=DAILY;COUNT=2'],
      'attendees': [
        {
          'email': 'lpage@example.com'
        }, {
          'email': 'sbrin@example.com'
        }
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {
            'method': 'email',
            'minutes': 24 * 60
          }, {
            'method': 'popup',
            'minutes': 10
          }
        ]
      }
    };
    if (err) {
      reject(err)
    }
    resolve(event)
  });
}

module.exports = formEvent
