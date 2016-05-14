const fs = require('fs');
const transform = require('./transform');

// const inFile = 'palette-bitmap.bmp';
// const outFile = 'transform-palette-bitmap.bmp';

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

function transformBitmap(options) {
  if (options.invert && options.greyscale) {
    console.log('\n  error: Please select only one option.\n');
    process.exit(1);
  }
  if (options.invert) options.transformer = transform.invert;
  if (options.greyscale) options.transformer = transform.greyscale;
  if (!options.transformer) {
    console.log('\n  error: no transform option selected.\n');
    process.exit(1);
  }

  fs.readFile(options.I, (err, buffer) => {
    const bitmap = new Bitmap(buffer);
    bitmap.modPalette(options.transformer);
    fs.writeFile(options.O, bitmap.bufferData, (err) => {
      if (err) console.log(err);
    });
  });
}

module.exports = transformBitmap;
