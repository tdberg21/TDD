import { assert } from 'chai';
import quickSort from '../lib/quickSort';


describe('quickSort-test', function () {
  it('should return true', function () {
    assert.equal(true, true);
  });

  it('should reverse the order of the array', function () {
    let numArray = [3, 4, 1, 2, 5];

    let actual = quickSort(numArray);
    let expected = [1, 2, 3, 4, 5];

    assert.deepEqual(actual, expected);
  })

});