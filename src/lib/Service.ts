import type { VehicleType } from "./Vehicle";

export class Service {
    id: string;
    name: string;
    type: VehicleType;
    vehicles: string[];
    ticketPrice: number;
    riders: number;
    appeal: number;

    constructor(
        id: string,
        name: string,
        type: VehicleType,
        vehicles: string[],
        ticketPrice: number
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.vehicles = vehicles;
        this.ticketPrice = ticketPrice;
        this.riders = 0;
        this.appeal = 50;
    }
}