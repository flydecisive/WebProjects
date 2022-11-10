const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let exp = distanceToPump / mpg;
    return (exp > fuelLeft) ? false : true;
};

console.log(zeroFuel(50, 25, 2));