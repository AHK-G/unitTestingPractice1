type AccountType = 'checking' | 'savings';

class BankAccount {
    private balance: number;
    private readonly type: AccountType;

    constructor(type: AccountType) {
        if (!['checking', 'savings'].includes(type)) {
            throw new Error('Invalid account type');
        }

        this.balance = 0;
        this.type = type;
    }

    // Deposit funds into the account
    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        this.balance += amount;
    }

    // Withdraw funds from the account
    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid withdrawal amount');
        }

        if (this.type === 'checking') {
            if (amount > this.balance) {
                throw new Error('Insufficient funds');
            }
        } else if (this.type === 'savings') {
            // Allow overdraft of up to 100 for savings account
            if (amount > this.balance + 100) {
                throw new Error('Insufficient funds');
            }
        }

        this.balance -= amount;
    }

    // Check the current balance
    public checkBalance(): number {
        return this.balance;
    }

    // Calculate interest for savings account
    public calculateInterest(rate: number): number {
        if (this.type !== 'savings') {
            throw new Error('Interest can only be calculated for savings account');
        }

        const interest = this.balance * (rate / 100);
        this.balance += interest;
        return interest;
    }
}

export default BankAccount;
