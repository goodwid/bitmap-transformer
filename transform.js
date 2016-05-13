// transforms data in 4 byte chunks.

var transform = {};

// accepts dword, returns inverted dword
transform.invertDword = function (offset) {
  for (var i = offset; i < offset + 3 ; i++) {
    console.log(this.bufferData[i]);
    // this.bufferData[i] = 0xff - this.bufferData[i];
  }
};

module.exports = transform
