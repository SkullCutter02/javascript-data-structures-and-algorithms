function bunnyEars(bunnies) {
  let num = 0;

  if (bunnies <= 0) return num;

  if (bunnies % 2 === 1) num += 2;
  else if (bunnies % 2 === 0) num += 3;

  return num + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(0));
