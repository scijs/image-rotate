"use strict"

var warp = require("ndarray-warp")

module.exports = rotateImage

function rotateImage(out, inp, theta, iX, iY, oX, oY) {
  var c = Math.cos(theta)
  var s = Math.sin(-theta)
  iX = iX || inp.shape[0]/2.0
  iY = iY || inp.shape[1]/2.0
  oX = oX || out.shape[0]/2.0
  oY = oY || out.shape[1]/2.0
  var a = iX - c * oX + s * oY
  var b = iY - s * oX - c * oY
  warp(out, inp, function(y,x) {
    y[0] = c * x[0] - s * x[1] + a
    y[1] = s * x[0] + c * x[1] + b
  })
  return out
}