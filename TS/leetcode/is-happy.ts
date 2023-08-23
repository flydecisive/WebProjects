function isHappy(n: number): boolean {
  let result: boolean = false;
  let sumOfSquares = 0;
  let digits: number[] = [];
  let numToString = String(n);
  digits = createDigitsArr(numToString);
  do {
    // digits.forEach((digit) => {
    //   sumOfSquares += Math.pow(digit, 2);
    // });
    sumOfSquares = calculateSumOfSquares(digits);
    if (sumOfSquares === 1) {
      result = true;
      break;
    } else {
      numToString = String(sumOfSquares);
      digits = createDigitsArr(numToString);
      if (digits.length === 1) {
        sumOfSquares = calculateSumOfSquares(digits);
        console.log(sumOfSquares);
        if (String(sumOfSquares).length === 1) {
          result = false;
          break;
        }
      }
      sumOfSquares = 0;
    }
  } while (true);
  return result;
}

function createDigitsArr(stringVar: string): number[] {
  let digits: number[] = [];
  for (let i = 0; i < stringVar.length; i++) {
    digits.push(Number(stringVar[i]));
  }

  return digits;
}

function calculateSumOfSquares(digits: number[]): number {
  let sumOfSquares: number = 0;
  digits.forEach((digit) => {
    sumOfSquares += Math.pow(digit, 2);
  });

  return sumOfSquares;
}

console.log(isHappy(2));
