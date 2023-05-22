import { Bank } from "./Bank";
import { Passenger } from "./Passenger";
import { Time } from "./Time";
import type { Vehicle } from "./Vehicle";

export class GameState {
    time: Time;
    bank: Bank;
    vehicles: Vehicle[];
    passengers: Passenger[];
    attractiveness: number;

    constructor(bankBalance?: number) {
        this.time = new Time();
        this.bank = new Bank(bankBalance);
        this.vehicles = [];
        this.passengers = [];
        this.attractiveness = 1;
    }

    public doTick = () => {
        // Passengers
        for (let i = 0; i < this.attractiveness; i++) {
            // Add a new Passenger for each attractiveness point
            this.passengers.push(new Passenger());
        }

        // Vehicles
        this.bank.in = 0;
        this.vehicles.forEach(v => {
            if (this.passengers.length <= v.capacity) {
                // If this vehicle enough capacity to collect every passenger
                this.bank.balance += this.passengers.length * this.bank.ticketPrice;
                this.passengers = [];
            } else {
                // If there are more passengers than this vehicle can carry
                this.bank.balance += v.capacity * this.bank.ticketPrice;
                this.passengers.splice(0, v.capacity);
            }
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
            total += v.capacity;
        });
        return total;
    }

    public collectPassenger = (passenger: Passenger) => {
        // Set the passengers to the same array, excluding the one provided
        this.bank.balance += this.bank.ticketPrice;
        this.passengers = this.passengers.filter(p => p.id !== passenger.id);
    }
}