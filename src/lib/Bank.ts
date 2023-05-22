export class Bank {
    balance: number;
    ticketPrice: number;

    constructor(balance?: number) {
        this.balance = balance ?? 100;
        this.ticketPrice = 2;
    }

    public getBalanceString = (): string => {        
        return "£" + new Intl.NumberFormat('en-GB').format(this.balance);
    }
}