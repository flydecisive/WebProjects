function separateDigits(nums: number[]): number[] {
  let result: number[] = [];
  nums.forEach((num) => {
    const numArr = String(num).split('');
    numArr.forEach((num) => {
      result.push(Number(num));
    });
  });

  return result;
}
