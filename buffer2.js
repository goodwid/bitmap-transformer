const fs = require('fs');

const inFile = 'palette-bitmap.bmp';
const outFile = 'new-palette-bitmap.bmp';
var bitmap = new Buffer;

fs.readFile(inFile, (err,buffer) => {
  bitmap = buffer;

}
