const fs = require('fs');
// const EventEmitter = require('events');
const transform = require('./transform');

const inFile = 'palette-bitmap.bmp';
const outFile = 'invert-palette-bitmap.bmp';

function Bitmap (buffer) {
  this.bufferData = buffer;
  this.PixelDataOffset = buffer.readInt32LE(10);
  // this.imageWidth = buffer.readInt32LE(18);
  // this.imageHeight = buffer.readInt32LE(22);
  this.paletteMapOffset = 54;
  // this.pixelBits = buffer.readInt16LE(28);
  // this.pixeldata = buffer.readInt32LE(this.PixelDataOffset);
  // this.invert = transform.invertDword;
}

Bitmap.prototype.modPalette = function() {
  console.log(this.bufferData);
  this.bufferData[7] = 0xff;
  console.log(this.bufferData);

  for (var i = 54; i < this.PixelDataOffset; i += 4) {
    for (var ji = i; ji < i + 3 ; ji++) {
      this.bufferData[ji] = 0xff - this.bufferData[ji];
    }
  }
};

fs.readFile(inFile, (err, buffer) => {
  const bitmap = new Bitmap(buffer);
  // showData(bitmap);
  console.log('got here');
  bitmap.modPalette();
  fs.writeFile(outFile, bitmap.bufferData, (err) => {
    if (err) console.log(err);
  });
});




// for testing
function showData(obj) {
  for (var d in obj) {
    console.log(`${d}: ${obj[d]}`);
  }
}
