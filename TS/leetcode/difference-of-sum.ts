function differenceOfSum(nums: number[]): number {
  let result: number;
  let numsSum = 0;
  let digitsSum = 0;
  let digitsArr: number[] = [];
  nums.forEach((num) => {
    numsSum += num;
    const digits = String(num).split('');
    digits.forEach((digit) => {
      digitsArr.push(Number(digit));
    });
  });

  digitsArr.forEach((digit) => {
    digitsSum += digit;
  });

  result = numsSum - digitsSum;

  return result;
}

console.log(differenceOfSum([1, 2, 3, 4]));
