function pi(str) {
  let piStr = "";

  if (str.length === 0) return piStr;

  if (str.charAt(0) === "p" && str.charAt(1) === "i") {
    piStr += "3.14";
  } else {
    piStr += str.charAt(0);
  }

  piStr = piStr.concat(pi(str.slice(1)));
  return piStr;
}

console.log(pi("xpix"));
