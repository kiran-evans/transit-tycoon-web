import { generateUid } from "./common";

export class Vehicle {
    id: string;
    type: VehicleType;
    description: string;
    capacity: number;
    purchasePrice: number;
    imageUrl: string;

    constructor(
        type: VehicleType,
        description: string,
        capacity: number,
        purchasePrice: number,
        imageUrl: string
    ) {
        this.id = generateUid();
        this.type = type;
        this.description = description;
        this.capacity = capacity;
        this.purchasePrice = purchasePrice;
        this.imageUrl = imageUrl;
    }
}

export enum VehicleType {
    Bus,
    Trolleybus,
    Tram,
    Train
}

export class Bus extends Vehicle {
    constructor() {
        super(VehicleType.Bus, "A basic vehicle.", 5, 100, "bus.jpg");
    }
}

export class Trolleybus extends Vehicle {
    constructor() {
        super(VehicleType.Trolleybus, "An electric version of the bus.", 15, 5000, "trolleybus.jpg");
    }
}

export class Tram extends Vehicle {
    constructor() {
        super(VehicleType.Tram, "Like a trolleybus, but a lot faster.", 100, 25000, "tram.jpg");
    }
}

export class Train extends Vehicle {
    constructor() {
        super(VehicleType.Train, "It's just a massive, fast tram.", 500, 500000, "train.jpg");
    }
}