import type { Vehicle, VehicleType } from "./Vehicle";
import type { Location } from "./common";

export class Service {
    id: string;
    type: VehicleType;
    termini: Location[];
    vehicles: Vehicle[];

    constructor(
        id: string,
        type: VehicleType,
        termini: Location[],
        vehicles: Vehicle[]
    ) {
        this.id = id;
        this.type = type;
        this.termini = termini;
        this.vehicles = vehicles;
    }
}