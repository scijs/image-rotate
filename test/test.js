"use strict"

var rotate = require("../rotate.js")
var ndarray = require("ndarray")
var test = require("tape")
var fuzz = require("test-fuzzy-array")

test("rotation, odd", function(t) {
  var almostEqual = fuzz(t, 0.000001)
  var a = ndarray([0,0,0,0,0,
                   0,0,1,0,0,
                   0,0,0,0,0,
                   0,0,0,0,0,
                   0,0,0,0,0], [5,5], [1,5])
  var b = ndarray([0,0,0,0,0,
                   0,0,0,0,0,
                   0,0,0,0,0,
                   0,0,0,0,0,
                   0,0,0,0,0], [5,5], [1,5])
  var ref30 = [0.,0.,0.,0.,0.,0.,0.,0.4330127018922193,0.4019237886466841,0.,0.,0.,0.,0.0669872981077807,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.]
  var ref30b = [0.,0.,0.,0.,0.,0.,0.,0.,0.1961524227066319,0.,0.,0.,0.13397459621556132,0.6650635094610967,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.]
  
  rotate(b, a, Math.PI/6)
  almostEqual(b.data, ref30, "30 degree rotation, centered")
  
  rotate(b, a, Math.PI/6, 1,3, 1,3)
  almostEqual(b.data, ref30b, "30 degree rotation, off-center")
  
  t.end()
})

test("rotation, even", function(t) {
  var almostEqual = fuzz(t, 0.000001)
  var a = ndarray([0,0,0,0,
                   0,0,1,0,
                   0,0,0,0,
                   0,0,0,0], [4,4], [1,4])
  var b = ndarray([0,0,0,0,
                   0,0,0,0,
                   0,0,0,0,
                   0,0,0,0], [4,4], [1,4])
  var ref30 = [0.,0.,0.,0.,0.,0.,0.5580127018922193,0.14294919243112275,0.,0.,0.2589745962155615,0.,0.,0.,0.,0.]
  
  rotate(b, a, Math.PI/6)
  almostEqual(b.data, ref30, "30 degree rotation, centered")
  
  t.end()
})
