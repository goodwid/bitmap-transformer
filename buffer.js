const fs = require('fs');
var palette = 'palette-bitmap.bmp';
// var nonpalette = 'non-palette-bitmap.bmp';

fs.readFile(palette,(err,buffer) => {
  const bitmap = new Bitmap(buffer);
  console.log(bitmap.offset);
});

function Bitmap(buffer) {
  this.offset = buffer.readInt32LE(10);
}
