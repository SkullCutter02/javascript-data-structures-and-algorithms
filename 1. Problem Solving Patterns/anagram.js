function isAnagram(str1, str2) {
  const counter1 = {};
  const counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    counter1[str1.charAt(i).toLowerCase()] =
      (counter1[str1.charAt(i)] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    counter2[str2.charAt(i).toLowerCase()] =
      (counter2[str2.charAt(i)] || 0) + 1;
  }

  for (let letter in counter1) {
    if (!counter2.hasOwnProperty(letter)) {
      return false;
    }

    if (counter1[letter] !== counter2[letter]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("Hello", "oleh"));
