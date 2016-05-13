const fs = require('fs');
var palette = 'palette-bitmap.bmp';
// var nonpalette = 'non-palette-bitmap.bmp';

// fs.readFile(palette,(err,buffer) => {
//   const bitmap = new Bitmap(buffer);
//   console.log(bitmap.offset);
// });

function Bitmap(buffer) {
  this.header = buffer.readInt32LE(0);
  this.offset = buffer.readInt32LE(10);
  this.headerSize = buffer.readUInt32LE(14);
  // this.bitmapWidth = buffer.readUInt32LE(18);
  // this.bitmapHeight = buffer.readUInt32LE(22);
  // this.colorPlanes = buffer.readUInt16LE(26);
  // this.bitsPerPixel = buffer.readUInt16LE(28);
  // this.compression = buffer.readUInt32LE(30);
  // this.imageSize = buffer.readUInt32LE(34);
  // this.horizontalRes = buffer.readUInt32LE(38);
  // this.verticalRes = buffer.readUInt32LE(42);
  // this.numColorsPalette = buffer.readUInt32LE(46);
  // this.numImportColors = buffer.readUInt32LE(50);
  // this.paletteLength = (buffer.length - this.offset) / 3;
  this.paletteOffset = 54;
}

function alterBitmap(originalFile, newFile) {
  var readFile = fs.readFile(originalFile);
  var alteredBitmap;  // waiting to be set
  readFile.on('data', function(data) {
    var headerInfo = new Bitmap(data);
    if (headerInfo.header !== 'BM' || headerInfo.headerSize !== 40) { // is not proper bmp
      console.log('not a proper bitmap');
    }
    else {  // is proper bitmap
      console.log('is a proper bitmap');
      alteredBitmap = fs.writeFile(newFile);
      var numPalletColors = (headerInfo.offset - headerInfo.paletteOffset) / 4;
      for (var a = headerInfo.paletteOffset; a < (headerInfo.paletteOffset + numPalletColors); a += 4) {
        invertColors(data, a, 'blue');
        invertColors(data, a, 'green');
        invertColors(data, a, 'red');
      }
      alteredBitmap.write(data);
      alteredBitmap.end(function() { console.log('dun.'); });
    }
  });
}

function invertColors(bufferData, offset, color) {
  if (color === 'blue') {
    bufferData.writeUInt8(255 - (bufferData.readUInt8(offset)), offset);
  }
  else if (color === 'green') {
    bufferData.writeUInt8(255 - (bufferData.readUInt8(offset+1)), offset+1);
  }
  else if (color === 'red') {
    bufferData.writeUInt8(255 - (bufferData.readUInt8(offset+2)), offset+2);
  }
  else {
    return;
  }
}

alterBitmap(palette);
