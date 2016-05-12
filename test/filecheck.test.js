const assert = require('assert');
const filecheck = require('../filecheck');

const wordlist = ['Integer','Curabitur','Vestibulum','Lorem'];
const datafiles = ['data/file1.txt','data/file2.txt','data/file3.txt','data/file4.txt'];

describe('filecheck', () => {

  it('returns an array containing the first word of each file', done => {
    // const dir = path.join(__dirname, '../data');
    filecheck(datafiles, (err, result) => {
      if (err) return done(err);
      assert.deepEqual(result, wordlist);
      done();
    });
  });
});
