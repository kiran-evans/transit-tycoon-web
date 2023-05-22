import { Bank } from "./Bank";
import type { Passenger } from "./Passenger";
import { Time } from "./Time";
import { VehicleType, type Vehicle } from "./Vehicle";

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
        let income = 0;

        // Vehicles
        this.vehicles.forEach(v => {
            income += v.capacity * this.bank.ticketPrice;
            this.passengers.splice(0, v.capacity);
        });
        
        this.bank.balance += income / 100;

        // Time
        this.time.second += 0.0025;
        this.time.day = Math.floor(this.time.second / 24) % 7;
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

    public getChange = (): number => {
        let change = 0;
        this.vehicles.forEach(v => {
            change += v.capacity * this.bank.ticketPrice;
        });
        return change;
    }

    public getNumberOfVehicles = () => {
        const result: { [key: string]: number } = {
            bus: 0,
            trolleybus: 0,
            tram: 0,
            train: 0
        }

        this.vehicles.forEach(v => {
            result[VehicleType[v.type].toLowerCase()]++;
        });

        return result;
    }
}