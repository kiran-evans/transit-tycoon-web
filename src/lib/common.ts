export class Location {
    x: number;
    y: number;
    label: string;

    constructor(
        x: number,
        y: number,
        label: string
    ) {
        this.x = x;
        this.y = y;
        this.label = label;
    }
}

export const generateUid = (): string => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let uid = "";
    for (let i = 0; i < 16; i++) {
        uid += characters[Math.floor(Math.random() * characters.length)];
    }
    return uid;
}