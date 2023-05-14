export class Time {
    private hour: number;
    private day: Day;

    constructor() {
        this.hour = 8;
        this.day = Day.MON;
    }

    public doHour = () => {
        this.hour++;
        this.day = Math.floor(this.hour / 24) % 7;
    }

    public getDayString = (): string => {
        return Day[this.day];
    }

    public getTimeString = (): string => {
        const time = Math.floor(this.hour % 24);
        
        if (time === 0) return "12AM";
        if (time === 12) return "12PM";
        if (time > 12) return time - 12 + "PM";
        return time + "AM";
    }

    public getWeekString = (): string => {
        return String(Math.ceil(this.hour / 24 / 7));
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