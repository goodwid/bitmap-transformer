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

  var intensity = (0.30 * red) + (0.59 * green) + (0.11 * blue);

  var k = 1; // desaturation factor, 1 = 100%; k > 1 = starts to invert color and bring  color back; k < 1 = starts to desaturation

  dword[2] = Math.floor(intensity * k + red * (1-k));
  dword[1] = Math.floor(intensity * k + green * (1-k));
  dword[0] = Math.floor(intensity * k + blue * (1-k));

  return dword;
};

transform.greyscale = transform.grayscale;

module.exports = transform;
