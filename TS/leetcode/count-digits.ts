function countDigits(num: number): number {
  const numToString = String(num);
  const digits: number[] = [];
  for (let i = 0; i < numToString.length; i++) {
    digits.push(Number(numToString[i]));
  }
  let count = 0;
  digits.forEach((digit) => {
    if (num % digit === 0) {
      count += 1;
    }
  });

  return count;
}

console.log(countDigits(7));
