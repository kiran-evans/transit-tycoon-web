import type { Writable } from "svelte/store";
import type { Service } from "./Service";
import { Time } from "./Time";
import type { Vehicle } from "./Vehicle";

export class GameState {
    time: Time;
    riders: number;
    bank: number;
    services: Service[];
    vehicles: Vehicle[];

    constructor(bank?: number) {
        this.time = new Time();
        this.riders = 0;
        this.bank = bank ?? 0;
        this.services = [];
        this.vehicles = [];
    }
}

export interface State {
    game: Writable<GameState>;
    dispatch: any;
}