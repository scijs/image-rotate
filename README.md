image-rotate
============
Rotates and translates a 2D ndarray.

Install
=======

    npm install image-rotate

Example
=======

```javascript
//Load input image
var lena = require("luminance")(require("lena"))

//Allocate storage for result
var result = require("zeros")([512, 512])

//Rotate the image
require("image-rotate")(result, lena, Math.PI / 6.0)

//Save the result
require("save-pixels")(result, "png").pipe(process.stdout)
```

```javascript
require("image-rotate")(output, input, theta[, iX, iY, oX, oY])
```
===

