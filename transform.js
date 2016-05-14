// transforms data in 4 byte chunks.

var transform = {};

// accepts dword, returns inverted dword
transform.invert = function (dword) {
  for (var i = 0; i < dword.length -1 ; i++) {
    dword[i] = 0xff - dword[i];
  }
  return dword;
};

module.exports = transform;
