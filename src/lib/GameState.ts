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

    public doHour = () => {
        this.time.hasTicked = true;
        this.time.hour++;
        this.time.day = Math.floor(this.time.hour / 24) % 7;

        if (this.getTotalCapacity() > this.riders) this.riders++;
        this.bank.in = this.riders * 10;
        this.bank.balance += (this.bank.in - this.bank.out);
    }

    public getTotalCapacity = (): number => {
        let total = 0;
        this.vehicles.forEach(v => {
            total += v.capacity;
        });
        return total;
    }
}