function swap(arr, i1, i2) {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let swapCount = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapCount += 1;
      }
    }

    if (swapCount === 0) break;
  }

  return arr;
}

console.log(bubbleSort([1, 5, 8, 20, 2, -2, 9, 30, 23]));
