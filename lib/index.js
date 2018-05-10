let numArray = [7, 3, 4, 2, 6, 1, 5];


// Bubble Sort

function bubbleSort(array) {
  for (let i = 0; i < numArray.length; i++) {

    for (let j = 1; j < numArray.length - 1, j++;) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]]
      }
    }
  };
  return array;
}

bubbleSort(numArray);


// Insertion Sort

function insertionSort(array) {
  // take first element from array and add it to a new array
  // repeat (add element to end of array and begin comparing)
  // compare last element of new array with the element to the left
  // if last element is greater, do nothing
  // if last element is not greater, swap places.
  // compare with next element in the array
  // repeat lines 27 and 28

}
