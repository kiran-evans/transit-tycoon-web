export class Time {
    hour: number;
    day: Day;
    hasTicked: boolean;

    constructor() {
        this.hour = 8;
        this.day = Day.MON;
        this.hasTicked = false;
    }

    public getDayString = (): string => {
        return Day[this.day];
    }

    public getTimeString = (): string => {
        const time = Math.floor(this.hour % 24);
        let timeString = "";
        
        if (time < 10) timeString += "0";
        timeString += time;
        timeString += ":00";
        return timeString;
    }

    public getWeekString = (): string => {
        return "Week " + String(Math.floor(this.hour / 24 / 7) + 1);
    }
}

export enum Day {
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
}