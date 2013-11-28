"use strict"

var warp = require("ndarray-warp")

module.exports = rotateImage

function rotateImage(out, inp, theta, iX, iY, oX, oY) {
  var c = Math.cos(theta)
  var s = Math.sin(theta)
  if(iX === undefined) {
    iX = inpt.shape[0]/2.0
    if(oX === undefined) {
      oX = out.shape[0]/2.0
    }
  } else if(oX === undefined) {
    oX = iX
  }
  if(iY === undefined) {
    iY = inpt.shape[0]/2.0
    if(oY === undefined) {
      oY = out.shape[0]/2.0
    }
  } else if(oY === undefined) {
    oY = iY
  }
  var a = oX - c * iX + s * iY
  var b = oY - s * iX - c * iY
  warp(out, inp, function(y,x) {
    y[0] = c * x[0] - s * x[1] + a
    y[1] = s * x[0] + c * x[1] + b
  })
  return out
}