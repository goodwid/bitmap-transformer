// transforms data in 4 byte chunks.

var transform = {};

// accepts dword, returns inverted dword
transform.invert = function (dword) {
  for (var i = 0; i < dword.length -1 ; i++) {
    dword[i] = 0xff - dword[i];
  }
  return dword;
};

transform.grayscale = function (dword) {

  var red = dword[2];
  var green = dword[1];
  var blue = dword[0];

  // console.log('dword: ', dword);
  // console.log('blue:  ', blue);
  // console.log('green: ', green);
  // console.log('red:   ', red);

  var intensity = (0.30 * red + (0.59 * green) + (0.11 * blue));
  // console.log(intensity);

  var k = 1;  // desaturation factor, 1 = 100%

  dword[2] = Math.floor(intensity * k + red * (1-1));
  dword[1] = Math.floor(intensity * k + green * (1-1));
  dword[0] = Math.floor(intensity * k + blue * (1-1));

  // console.log('blue after:  ', blue);
  // console.log('green after: ', green);
  // console.log('red after:   ', red);
  //
  // console.log('dword after: ', dword);


  // var green = dword[0];
  // var blue = dword[1];
  // var red = dword[2];
  // var dwordLength = dword.length;
  // var conversionFactor = 255 / dwordLength;
  // var averageValue = (green + blue + red)/3;
  // var grey = ((averageValue / conversionFactor) + 0.5) * conversionFactor;
  // console.log(grey);
  //
  // dword[0] *= (grey + 0.07 * grey);  // blue
  // dword[1] *= (grey + 0.71 * grey);  // green
  // dword[2] *= (grey + 0.21 * grey);  // red
  //
  // var pixelB = blue.ParseInt();
  // var pixelG = green.ParseInt();
  // var pixelR = red.ParseInt();
  //
  // pixelB = pixelG = pixelR = (red + green + blue / 3);

  // for (var i = 0; i < dword.length - 1; i++) {
  //   console.log(dword.slice(0,1));
  // }

  // dword[0] = dword[0] * 1.07 + 70;  // blue
  // dword[1] = dword[1] * 1.50 + 90; // green
  // dword[2] = dword[2] * 1.21 + 100; // red

  // for (var i = 0; i < dword.length - 1; i++) {
  //   dword[i] = (dword[i] + 120 ) / 1.5;
  //   if (dword[i] > 255) dword[i] = 255;
  // }
  // console.log(grey);
  // console.log(dword.slice(0,1)[0]);

  return dword;
};

transform.greyscale = transform.grayscale;

module.exports = transform;
