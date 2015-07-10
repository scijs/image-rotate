//Load input image
var baboon = require("luminance")(require("baboon-image"))

//Allocate storage for result
var result = require("zeros")([512, 512])

//Rotate the image
require("../rotate.js")(result, baboon, Math.PI / 6.0)

//Save the result
require("save-pixels")(result, "png").pipe(process.stdout)