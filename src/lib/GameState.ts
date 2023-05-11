import type { Service } from "./Service";

export class GameState {
    riders: number;
    bank: number;
    services: Service[];

    constructor(
        riders: number,
        bank: number,
        services: Service[]
    ) {
        this.riders = riders;
        this.bank = bank;
        this.services = services;
    }
}