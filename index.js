#!/usr/bin/env node
var fd = require('./buffer.js');
var program = require('commander');


program
  .version('1.0.3')
  // .usage('<cmd> <method> <infile> <outfile>')
  // .usage ('')
  .option('-i <input>, --input', 'paletted bitmap to convert')
  .option('-o <output>, --output', 'output file')
  .option('-t, --transform <method>', 'invert or greyscale', /^(invert|greyscale)$/i)
  .parse(process.argv);

console.log(fd);
// fd.transformBitmap();
console.log(typeof fd.transformBitmap);
// console.log(program.I);
