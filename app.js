/* sudo forever start app.js */

/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , bart = require('./lib/bart').createClient()
  , gpio = require("pi-gpio");

var app = express()

// GLOBALS
var abbreviation, abbreviationPrevious, minutes, stations = '';

// GPIO
var pinDALY = 7
  , pinDUBL = 11
  , pinFRMT = 12
  , pinMLBR = 13
  , pinPITT = 15
  , pinRICH = 16
  , pinSFIA = 18

gpio.open(pinDALY, "output", function(err) {}) // Row 30, Green
gpio.open(pinDUBL, "output", function(err) {}) // Row 28, Blue
gpio.open(pinFRMT, "output", function(err) {}) // Row 26, Green
gpio.open(pinMLBR, "output", function(err) {}) // Row 24, Red
gpio.open(pinPITT, "output", function(err) {}) // Row 22, Yellow
gpio.open(pinRICH, "output", function(err) {}) // Row 20, Red
gpio.open(pinSFIA, "output", function(err) {}) // Row 18, Yellow

gpio.read(pinDALY, function(err, value) {
    if(err) throw err;
    // console.log(value);    // The current state of the pin
})


// BART
setTimeout(function(){

  bart.on('mont', function(estimates){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    for (var i = 0; i < estimates.length; i++) {

      abbreviation = estimates[i].abbreviation,
      minutes = estimates[i].minutes;

      if ( abbreviation != abbreviationPrevious ) { // make sure it's a new destination to check
        console.log( abbreviation + " " + minutes );
          if ( ( minutes >= 3 ) && ( minutes <= 6 ) ) { // if between 3 and 6 minutes until next arrival, light up
          // if ( ( minutes >= 0 ) && ( minutes <= 100 ) ) { // if between 3 and 6 minutes until next arrival, light up
          stations = stations + abbreviation + ' ';
          switch( abbreviation ) {
            case "DALY":
                gpio.write(pinDALY, 1, function() {}); // turn on LED
                break;
            case "DUBL":
                gpio.write(pinDUBL, 1, function() {}); // turn on LED
                break;
            case "FRMT":
                gpio.write(pinFRMT, 1, function() {}); // turn on LED
                break;
            case "MLBR":
                  gpio.write(pinMLBR, 1, function() {}); // turn on LED
                break;
            case "PITT":
                  gpio.write(pinPITT, 1, function() {}); // turn on LED
                break;
            case "RICH":
                gpio.write(pinRICH, 1, function() {}); // turn on LED
                break;
            case "SFIA":
                gpio.write(pinSFIA, 1, function() {}); // turn on LED
                break;
            default:
                // ...
          }
        }
      }

      abbreviationPrevious = abbreviation;

      // // turn on all the LEDs, for testing
      // gpio.write(pinDALY, 1, function() {}) // turn on LED
      // gpio.write(pinDUBL, 1, function() {}) // turn on LED
      // gpio.write(pinFRMT, 1, function() {}) // turn on LED
      // gpio.write(pinMLBR, 1, function() {}) // turn on LED
      // gpio.write(pinPITT, 1, function() {}) // turn on LED
      // gpio.write(pinRICH, 1, function() {}) // turn on LED
      // gpio.write(pinSFIA, 1, function() {}) // turn on LED

    }

    console.log('active: ' +  stations);
    stations = '';
    console.log(' ');


  });

  bart.on('error', function(err){
      console.log(err);
  });

}, 6000);





// EXPRESS AND STUFF
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.listen(3000)
