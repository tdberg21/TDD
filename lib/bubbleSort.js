
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {

    for (let j = array.length; j < array.length - 1, j--;) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

