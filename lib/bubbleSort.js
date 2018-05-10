let numArray = [7, 3, 4, 2, 6, 1, 5];


// Bubble Sort

function bubbleSort(array) {
  for (let i = 0; i < numArray.length; i++) {

    for (let j = numArray.length; j < numArray.length - 1, j--;) {
      if (numArray[j - 1] > numArray[j]) {
        [numArray[j - 1], numArray[j]] = [numArray[j], numArray[j - 1]]
      }
    }
  };
  return array;
}

bubbleSort(numArray);



