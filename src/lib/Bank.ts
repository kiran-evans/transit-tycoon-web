export class Bank {
    balance: number;
    ticketPrice: number;
    priceModifier: number;

    constructor(balance?: number) {
        this.balance = balance ?? 100;
        this.ticketPrice = 2;
        this.priceModifier = 0.01;
    }

    public getBalanceString = (): string => {        
        return "£" + new Intl.NumberFormat('en-GB').format(Math.floor(this.balance));
    }
}