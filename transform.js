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

  // dword.slice(0,1) = (dword.slice(0,1) * 0.07);
  // dword.slice(1,2) = (dword.slice(1,2) * 0.72);
  // dword.slice(2,3) = (dword.slice(2,3) * 0.21);

  for (var i = 0; i < dword.length - 1; i++) {
  //   dword[i].slice(0,1) *= 0.07;
  //   dword[i].slice(1,2) *= 0.72;
  //   dword[i].slice(2,3) *= 0.21;
  //
    dword[i] = (dword[i] + 150 ) / 2;
  //
  //   dword[i].slice(0,1) += 0x00;
  //   dword[i].slice(1,2) += 0x00;
  //   dword[i].slice(2,3) += 0x00;

  //   console.log(dword.slice(0,1) + 0x08);  // the fuck won't this work? when i try and use slice in application, no matter if I'm attempting to alter via hex or decimal?
  }
  return dword;
};

module.exports = transform;
