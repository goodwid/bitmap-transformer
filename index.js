#!/usr/bin/env node
var bT = require('./bitmapTransform');
var program = require('commander');


program
  .version('1.0.3')
  // .usage('<cmd> <method> <infile> <outfile>')
  // .usage ('')
  .option('-i <input>, --input', 'paletted bitmap to convert')
  .option('-o <output>, --output', 'output file')
  .option('-t, --transform <method>', 'invert or greyscale', 'invert')
  .parse(process.argv);


// console.log(program);

bT.palette(program);
