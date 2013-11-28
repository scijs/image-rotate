image-rotate
============
Rotates and translates a 2D [ndarray](https://github.com/mikolalysenko/ndarray).

<img src="https://raw.github.com/mikolalysenko/image-rotate/master/example/rotated.png">

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

# API

#### `require("image-rotate")(output,input,theta[,iX,iY,oX,oY])`
Rotates an image by `theta` radians about the point `iX,iY` in the source image and translated to the point `oX,oY` in the output image.

* `output` is an array that gets the output of rotating the image
* `input` is the image which is rotated
* `theta` is the amount to rotate by in radians
* `iX,iY` is the point to rotate about (default center of input)
* `oX,oY` is the image of the point to rotate about in output image (default center of output)

**Returns** `output`

# Credits
(c) 2013 Mikola Lysenko. MIT License



