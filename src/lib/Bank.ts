export class Bank {
    balance: number;
    in: number;
    out: number;
    ticketPrice: number;

    constructor(balance?: number) {
        this.balance = balance ?? 0;
        this.in = 0;
        this.out = 0;
        this.ticketPrice = 2;
    }

    public getBalanceString = (): string => {        
        return "£" + new Intl.NumberFormat('en-GB').format(this.balance);
    }

    public getChangeString = (): string => {
        const sign = this.in >= this.out ? "+" : "-";
        return sign + "£" + new Intl.NumberFormat('en-GB').format(Math.abs(this.in - this.out)) + " per second";
    }
}