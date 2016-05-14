const fs = require('fs');
const transform = require('./transform');

const inFile = 'palette-bitmap.bmp';
const outFile = 'transform-palette-bitmap.bmp';

function Bitmap (buffer) {
  this.bufferData = buffer;
  this.PixelDataOffset = buffer.readInt32LE(10);
  this.paletteMapOffset = 54;
}

Bitmap.prototype.modPalette = function(fn) {
  var modData = Buffer.alloc(4);
  for (var i = this.paletteMapOffset; i < this.PixelDataOffset -1; i += 4) {
    modData = fn(this.bufferData.slice(i,i + 3));
    modData.copy(this.bufferData,i);
  }
};

function transformBitmap (inFile, outFile, transformer) {
  fs.readFile(inFile, (err, buffer) => {
    const bitmap = new Bitmap(buffer);
    bitmap.modPalette(transformer);
    fs.writeFile(outFile, bitmap.bufferData, (err) => {
      if (err) console.log(err);
    });
  });
}

transformBitmap(inFile, outFile, transform.grayscale);

module.exports = transformBitmap;
