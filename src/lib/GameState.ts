import { Bank } from "./Bank";
import type { Passenger } from "./Passenger";
import { Time } from "./Time";
import type { Vehicle } from "./Vehicle";

export class GameState {
    time: Time;
    bank: Bank;
    vehicles: Vehicle[];
    passengers: Passenger[];

    constructor(bankBalance?: number) {
        this.time = new Time();
        this.bank = new Bank(bankBalance);
        this.vehicles = [];
        this.passengers = [];
    }

    public doTick = () => {
        // Vehicles
        this.bank.in = 0;
        this.vehicles.forEach(v => {         
            this.bank.in += v.pps * this.bank.ticketPrice;
        });        

        // Time
        this.time.hasTicked = true;
        this.time.second++;
        this.time.day = Math.floor(this.time.second / 24) % 7;

        // Bank
        this.bank.balance += (this.bank.in - this.bank.out);
    }

    public getTotalCapacity = (): number => {
        let total = 0;
        this.vehicles.forEach(v => {
            total += v.pps;
        });
        return total;
    }
}