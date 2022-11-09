const arrayDiff = function (array, mean) {
    for (let i of mean) {
        for (let j = 0; j < array.length; j++) {
            if (i === array[j]) {
                array.splice(j, 1);
                j -= 1;
            }
        }
    }
    return array;
}

console.log(arrayDiff([1, 2, 2, 2, 3, 3, 4], [2, 3]))