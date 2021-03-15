function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([1, 5, 8, 20, 2, -2, 9, 30, 23]));

/*
[1, 4, 6, 20, 2]
[1, 4, 6, 20, 20]
[1, 4, 6, 6, 20]
[1, 4, 4, 6, 20]
[1, 2, 4, 6, 20]
*/
