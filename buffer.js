const fs = require('fs');
var palette = 'palette-bitmap.bmp';
// var nonpalette = 'non-palette-bitmap.bmp';

fs.readFile(palette,(err,buffer) => {
  const bitmap = new Bitmap(buffer);
  console.log(bitmap.offset);
});

function Bitmap(buffer) {
  this.headerSize = buffer.readUInt32LE(14);
  this.bitmapWidth = buffer.readUInt32LE(18);
  this.bitmapHeight = buffer.readUInt32LE(22);
  this.colorPlanes = buffer.readUInt16LE(26);
  this.bitsPerPixel = buffer.readUInt16LE(28);
  this.compression = buffer.readUInt32LE(30);
  this.imageSize = buffer.readUInt32LE(34);
  this.horizontalRes = buffer.readUInt32LE(38);
  this.verticalRes = buffer.readUInt32LE(42);
  this.numColorsPalette = buffer.readUInt32LE(46);
  this.numImportColors = buffer.readUInt32LE(50);
  this.offset = buffer.readInt32LE(10);
}
