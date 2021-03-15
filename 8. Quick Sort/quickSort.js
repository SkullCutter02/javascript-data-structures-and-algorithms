function swap(arr, i1, i2) {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  const pivot = arr[startIndex];
  let swapIdx = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, startIndex, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIndex = pivot(arr, left, right);
  quickSort(arr, left, pivotIndex - 1); // left side
  quickSort(arr, pivotIndex + 1, right); // right side

  return arr;
}

console.log(quickSort([4, 9, 2, 5, 9, 1, 100, 3, 5, -3]));
