function getMaxNumber(a, b, c) {
  let maxNumber;
  if (a > b && a > c) {
    maxNumber = a;
  } else if (b > a && b > c) {
    maxNumber = b;
  } else {
    maxNumber = c;
  }
  return maxNumber;
}

console.log(getMaxNumber(-1, -2, -3));
