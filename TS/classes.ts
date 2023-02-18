class Vehicle {
    drive(): void {
        console.log(`I'm driving`);
    }

    stop(): void {
        console.log(`I've stopped`);
    }
};

class Car extends Vehicle {
    drive(): void {
        console.log(`I'm a car and I'm driving`);
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.stop();

const car = new Car();
car.drive();
car.stop();