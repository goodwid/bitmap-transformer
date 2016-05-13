const fs = require( 'fs' );
var assert = require( 'assert' );

var fileOne = fs.readFileSync('./palette-bitmap.bmp');
var fileTwo = fs.readFileSync('./palette-bitmapCOPY.bmp');

describe( 'comparing files to see if match', () => {

  it ('palette-bitmap.bmp should match palette-bitmapCOPY.bmp', () => {
    assert.Equal(fileOne,fileTwo);
  });
});
