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

  dword[0] = dword[0] * 0.11;
  dword[1] = dword[1] * 0.11;
  dword[2] = dword[2] * 0.11;

  for (var i = 0; i < dword.length - 1; i++) {
    dword[i] = (dword[i] + 150 ) / 2;
    if (dword[i] > 255) dword[i] = 255;
  }
  return dword;
};

transform.greyscale = transform.grayscale;

module.exports = transform;
