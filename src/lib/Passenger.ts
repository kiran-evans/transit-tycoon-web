import { generateUid } from "./common";

export class Passenger {
    id: string;

    constructor() {
        this.id = generateUid();
    }
}