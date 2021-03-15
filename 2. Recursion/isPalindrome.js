function isPalindrome(str) {
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
  else if (str.length === 0 || str.length === 1) return true;

  return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("hdfdh"));
