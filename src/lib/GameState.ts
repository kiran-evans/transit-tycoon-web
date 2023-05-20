import { Bank } from "./Bank";
import type { Service } from "./Service";
import { Time } from "./Time";
import type { Vehicle } from "./Vehicle";

export class GameState {
    time: Time;
    bank: Bank;
    services: Service[];
    vehicles: Vehicle[];

    constructor(bankBalance?: number) {
        this.time = new Time();
        this.bank = new Bank(bankBalance);
        this.services = [];
        this.vehicles = [];
    }

    public doHour = () => {
        // Time
        this.time.hasTicked = true;
        this.time.hour++;
        this.time.day = Math.floor(this.time.hour / 24) % 7;

        // Bank
        this.bank.balance += (this.bank.in - this.bank.out);

        // Services
        // this.services.forEach(s => {
        //     // console.log(Math.floor(s.appeal / (this.getTotalCapacity() ?? 1)));
        //     console.log(this.getTotalCapacity());
            
            
        //     s.riders += Math.floor(s.appeal / (this.getTotalCapacity() + 1));
        // });
    }

    public getTotalCapacity = (): number => {
        let total = 0;
        this.vehicles.forEach(v => {
            total += v.capacity;
        });
        return total;
    }

    public getTotalRiders = (): number => {
        let total = 0;
        this.services.forEach(s => {
            total += s.riders;
        });
        return total;
    }
}