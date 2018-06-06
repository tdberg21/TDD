
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = []
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      sortedArray.push(left[indexLeft]);
      indexLeft++;
    } else {
      sortedArray.push(right[indexRight]);
      indexRight++;
    }
  }

  return sortedArray.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}



export default mergeSort;