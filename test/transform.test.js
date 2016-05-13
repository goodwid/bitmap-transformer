const assert = require('assert');
const transform = require ('../transform');

describe('transform', () => {

  it('inverts dword', () => {
    var initial = new Buffer([ 0x00, 0x35, 0xff, 0]);
    var expectedOutput = new Buffer([ 0xff, 0xca, 0x00, 0]);
    assert.deepEqual(transform.invert(initial), expectedOutput);
  });


});
