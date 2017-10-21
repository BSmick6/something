var chrono = require('chrono-node');

function formEvent(info) {
  new Promise(resolve, reject) {
    const dates = info.time.map(time=>chrono.parseDate(time));
    const dateStart = dates.reduce((actual,next)=>{
      if (!next) return actual
      return (actual>next)?actual:next
    })
    const dateEnd = dates.reduce((actual,next)=>{
      if (!next) return actual
      return (actual<next)?actual:next
    })

    var event = {
      'summary': title,
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
  }
}
