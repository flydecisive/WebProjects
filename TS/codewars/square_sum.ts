function squareSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((number) => {
        sum += Math.pow(number, 2);
    })
    return sum;
}

console.log(squareSum([1,2,2]));