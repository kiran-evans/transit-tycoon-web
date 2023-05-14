export class Vehicle {
    id: string;
    name: string;
    type: VehicleType;
    capacity: number;
    price: number;

    constructor(
        id: string,
        name: string,
        type: VehicleType,
        capacity: number,
        price: number
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.price = price;
    }
}

export enum VehicleType {
    BUS,
    TROLLEYBUS,
    TRAM,
    TRAIN
}