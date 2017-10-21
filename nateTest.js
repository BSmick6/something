const readText = require('./readText');
const readImage = require('./readImage');
const formEvent = require('./formEvent');
const fileName = './images/vevo.jpg';

const test1 = { money: 'SHINE $65 per person Hole prizes',
  time:
   [ 'Every SATURDAY for 5 weeks starting JUNE 1, 2013',
     'MAY 11, 2013'],
  people: [ 'Nevaeh', 'Glen Carin', 'Green', 'Nicole' ],
  place: [ 'Wisconsin' ],
  email: [ 'Nicole@projectsweetpeas.com' ],
  phone: [ '715-584-0050' ] };

readImage(fileName)
  .then(txt=>readText(txt))
  .then(info=>formEvent(info))
  .then(evt=>{
    console.log(evt);
  }).catch(err=>{
    console.log("ERR",err);
  });
// formEvent(test1).then(a=>{
//   console.log(a);
// }).catch(err=>{
//   console.log(err);
// })
