export class Vehicle {
    id: string;
    name: string;
    type: VehicleType;
    capacity: number;

    constructor(
        id: string,
        name: string,
        type: VehicleType,
        capacity: number
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
    }
}

export enum VehicleType {
    BUS,
    TROLLEYBUS,
    TRAM,
    TRAIN
}