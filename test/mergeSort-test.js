import { assert } from 'chai';
import mergeSort from '../lib/mergeSort';


describe('merge-test', function () {

  it('should reverse the order of a small array', function () {
    let numArray = [5, 3, 1, 2, 4];
    let actual = mergeSort(numArray);
    let expected = [1, 2, 3, 4, 5];

    assert.deepEqual(actual, expected);
  });

});
