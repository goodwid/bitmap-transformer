const assert = require('assert');
const fs = require( 'fs' );
const transform = require ('../transform');
const bT = require('../bitmapTransform');

describe('transform', () => {
  it('invert function inverts dword', () => {
    var initial = new Buffer([ 0x00, 0x35, 0xff, 0]);
    var expectedOutput = new Buffer([ 0xff, 0xca, 0x00, 0]);
    assert.deepEqual(transform.invert(initial), expectedOutput);
  });


});

describe( 'conversion', () => {
  var inputFilename = ('./palette-bitmap.bmp');
  var outputFilename = ('./invert.test.bmp');
  var knownGood = fs.readFileSync('./test/invert.test.bmp');
  var options = {
    I: inputFilename,
    O: outputFilename,
    transform: 'invert'
  };

  it ('applies bitmapTransform.palette to bmp, compares output to known test file', done => {
    bT.palette(options, (err) => {
      if (err) return done(err);
      var output = fs.readFileSync(outputFilename);
      assert.deepEqual(output, knownGood);
      done();
    });
  });

  after (() => {
    fs.unlinkSync(outputFilename);
  });
});
