import { assert } from 'chai';
import bubbleSort from '../lib/bubbleSort';


describe('bubble-test', function () {

  it('should reverse the order of the array', function() {
    let numArray = [5, 3, 1, 2, 4];
    let actual = bubbleSort(numArray);
    let expected = [ 1, 2, 3, 4, 5 ];

    assert.deepEqual(actual, expected);
  })

});

