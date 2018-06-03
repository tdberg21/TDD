import { assert } from 'chai';
import insertionSort from '../lib/insertionSort.js';

describe('insertion-test', function () {
  it('should return true', function () {
    assert.equal(true, true);
  });

  it('should reverse the order of a small array', function () {
    let numArray = [3, 4, 1, 2, 5];

    let actual = insertionSort(numArray);
    let expected = [1, 2, 3, 4, 5];

    assert.deepEqual(actual, expected);
  })

});

