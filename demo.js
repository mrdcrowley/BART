/* sudo forever start app.js */

/* FRMT DALY, RICH DALY, RICH DALY, PHIL RICH MLBR, PHIL RICH MLBR, PHIL RICH 24TH MLBR, DUBL PHIL 24TH MLBR, DALY, DALY, RICH DALY, RICH */

/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , bart = require('./lib/bart').createClient()
  , gpio = require("pi-gpio");

var app = express()

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

// 1 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinFRMT, 1, function() {}) // turn on LED
    gpio.write(pinMLBR, 1, function() {}) // turn on LED

}, 60000);


// 2 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinFRMT, 1, function() {}) // turn on LED

}, 120000);


// 3 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 180000);


// 4 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED
    gpio.write(pinSFIA, 1, function() {}) // turn on LED

}, 240000);

// 5 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 300000);


// 6 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDUBL, 1, function() {}) // turn on LED
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED

}, 360000);


// 7 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED

}, 420000);


// 8 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED

}, 480000);


// 9 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 540000);


// 10 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 600000);


// 11 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED

}, 660000);


// 12 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 720000);


// 13 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 780000);


// 14 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinRICH, 1, function() {}) // turn on LED

}, 840000);


// 15 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDUBL, 1, function() {}) // turn on LED
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED

}, 900000);


// 16 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinMLBR, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED

}, 960000);


// 17 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinDUBL, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED

}, 1020000);


// 18 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinDUBL, 1, function() {}) // turn on LED
    gpio.write(pinPITT, 1, function() {}) // turn on LED

}, 1080000);


// 19 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDALY, 1, function() {}) // turn on LED
    gpio.write(pinDUBL, 1, function() {}) // turn on LED
    gpio.write(pinFRMT, 1, function() {}) // turn on LED
    gpio.write(pinSFIA, 1, function() {}) // turn on LED

}, 1140000);


// 20 minute
setTimeout(function(){

    // turn off LEDs
    gpio.write(pinDALY, 0, function() {})
    gpio.write(pinDUBL, 0, function() {})
    gpio.write(pinFRMT, 0, function() {})
    gpio.write(pinMLBR, 0, function() {})
    gpio.write(pinPITT, 0, function() {})
    gpio.write(pinRICH, 0, function() {})
    gpio.write(pinSFIA, 0, function() {})

    // turn on LEDs
    gpio.write(pinDUBL, 1, function() {}) // turn on LED
    gpio.write(pinFRMT, 1, function() {}) // turn on LED
    gpio.write(pinSFIA, 1, function() {}) // turn on LED

}, 1200000);






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
