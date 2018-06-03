// let sortedArray;

function quickSort(array) {

  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let lessThanPivot = [];
  let greaterThanPivot = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      lessThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];

  // return sortedArray;
}


module.exports = quickSort;