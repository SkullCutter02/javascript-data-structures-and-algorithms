function containSix(arr, index) {
  if (!arr[index]) return false;
  else if (arr[index] === 6) return true;
  else return containSix(arr, index + 1);
}

console.log(containSix([1, 2, 6], 0));
