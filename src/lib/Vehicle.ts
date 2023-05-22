import { generateUid } from "./common";

export class Vehicle {
    id: string;
    name: string;
    description: string;
    capacity: number;
    purchasePrice: number;
    imageUrl: string;

    constructor(
        name: string,
        description: string,
        capacity: number,
        purchasePrice: number,
        imageUrl: string
    ) {
        this.id = generateUid();
        this.name = name;
        this.description = description;
        this.capacity = capacity;
        this.purchasePrice = purchasePrice;
        this.imageUrl = imageUrl;
    }
}

export class Bus extends Vehicle {
    constructor(
        name?: string
    ) {
        super(name ?? "New Bus", "A basic vehicle.", 50, 50, "bus.jpg");
    }
}

export class Trolleybus extends Vehicle {
    constructor(
        name?: string
    ) {
        super(name ?? "New Trolleybus", "An electric version of the bus.", 75, 700, "trolleybus.jpg");
    }
}

export class Tram extends Vehicle {
    constructor(
        name?: string
    ) {
        super(name ?? "New Tram", "Like a trolleybus, but a lot faster.", 100, 900, "tram.jpg");
    }
}

export class Train extends Vehicle {
    constructor(
        name?: string
    ) {
        super(name ?? "New Train", "It's just a massive, fast tram.", 300, 2000, "train.jpg");
    }
}