import { Bank } from "./Bank";
import type { Service } from "./Service";
import { Time } from "./Time";
import type { Vehicle } from "./Vehicle";

export class GameState {
    time: Time;
    riders: number;
    bank: Bank;
    services: Service[];
    vehicles: Vehicle[];

    constructor(bankBalance?: number) {
        this.time = new Time();
        this.riders = 0;
        this.bank = new Bank(bankBalance);
        this.services = [];
        this.vehicles = [];
    }
}