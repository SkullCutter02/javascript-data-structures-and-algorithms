function searchSubstring(str, substr) {
  let pos = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === substr.charAt(pos)) {
      pos += 1;

      if (pos === substr.length - 1) {
        count += 1;
        pos = 0;
      }
    } else {
      pos = 0;
    }
  }

  return count;
}

console.log(searchSubstring("hiyolohi", "yolo"));
