import type { VehicleType } from "./Vehicle";
import type { Location } from "./common";

export class Service {
    id: string;
    name: string;
    type: VehicleType;
    termini: Location[];
    vehicles: string[];

    constructor(
        id: string,
        name: string,
        type: VehicleType,
        termini: Location[],
        vehicles: string[]
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.termini = termini;
        this.vehicles = vehicles;
    }
}