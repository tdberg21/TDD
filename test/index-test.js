import { assert } from 'chai';
var Index = require('../lib/index.js');


describe('Index', function () {
  it('should return true', function () {
    assert.equal(true, true);
  });

  it('should reverse the order of the array', function() {
    let numArray = [3, 4, 1, 2, 5];

    bubbleSort(numArray);
    assert.deepEqual(numArray, '[1, 2, 3, 4, 5]');
  })

});

