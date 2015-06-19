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



      // // turn on all the LEDs, for testing
      gpio.write(pinDALY, 1, function() {}) // turn on LED
      gpio.write(pinDUBL, 1, function() {}) // turn on LED
      gpio.write(pinFRMT, 1, function() {}) // turn on LED
      gpio.write(pinMLBR, 1, function() {}) // turn on LED
      gpio.write(pinPITT, 1, function() {}) // turn on LED
      gpio.write(pinRICH, 1, function() {}) // turn on LED
      gpio.write(pinSFIA, 1, function() {}) // turn on LED


app.listen(3000)