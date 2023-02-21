class Vehicle {
    // public drive(): void {
    //     console.log(`I'm driving`);
    // }

    // color: string; 

    // constructor(color: string) {
    //     this.color = color;
    // }

    constructor(public color: string) {}

    public stop(): void {
        console.log(`I've stopped`);
    }

    protected beep(): void {
        console.log(`Beeeeeeeep!`);
    }
};

class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log(`I'm a car and I'm driving`);
    }

    startDrivingProcess(): void {
        this.drive();
        this.beep();
    }
}

const vehicle = new Vehicle('black');
// vehicle.drive();
console.log(vehicle.color);
vehicle.stop();

const car = new Car(3, 'red');
car.startDrivingProcess();
car.stop();