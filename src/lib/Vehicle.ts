import { generateUid } from "./common";

export class Vehicle {
    id: string;
    name: string;
    capacity: number;
    price: number;
    imageUrl: string;

    constructor(
        name: string,
        capacity: number,
        price: number,
        imageUrl: string
    ) {
        this.id = generateUid();
        this.name = name;
        this.capacity = capacity;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

export class Bus extends Vehicle {
    constructor(
        name?: string
    ) {
        super(name ?? "New Bus", 50, 500, "bus.jpg");
    }
}

export class Trolleybus extends Vehicle {    
    constructor(
        name?: string
    ) {
        super(name ?? "New Trolleybus", 75, 700, "trolleybus.jpg");
    }
}

export class Tram extends Vehicle {    
    constructor(
        name?: string
    ) {
        super(name ?? "New Tram", 100, 900, "tram.jpg");
    }
}

export class Train extends Vehicle {    
    constructor(
        name?: string
    ) {
        super(name ?? "New Train", 300, 2000, "train.jpg");
    }
}