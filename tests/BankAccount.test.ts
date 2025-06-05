import BankAccount from "../src/BankAccount";

describe("BankAccount", () => {
  it("should deposit funds into the account", () => {
    const amount: number = 200;

    const account = new BankAccount("savings");
    account.deposit(amount);

    expect(account.checkBalance()).toBe(amount);
  });

  it("should throw error if the amount in under 0", () => {
    const account = new BankAccount("savings");
    expect(() => account.deposit(-300)).toThrow("Invalid deposit amount");
  });

  it("should withdraw funds from the account", () => {
    const account = new BankAccount("savings");

    account.deposit(150);
    account.withdraw(100);

    expect(account.checkBalance()).toBe(50);
  });

  it("should throw error if the withdraw is negative number", () => {
    const account = new BankAccount("savings");

    expect(() => account.withdraw(-1)).toThrow("Invalid withdrawal amount");
  });

  it("should throw error if the withdraw is excceeding checking account", () => {
    const account = new BankAccount("checking");

    account.deposit(100);
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  it("should accept negative balance when withdrawing up to 100 if it's savings account", () => {
    const account = new BankAccount("savings");

    account.withdraw(75);

    expect(account.checkBalance()).toBe(-75);
  });

  it("should accept negative balance when withdrawing is 100 if it's savings account", () => {
    const account = new BankAccount("savings");

    account.withdraw(100);

    expect(account.checkBalance()).toBe(-100);
  });

  it("should throw error if the withdraw is excceeding 100 of saving account", () => {
    const account = new BankAccount("savings");

    expect(() => account.withdraw(101)).toThrow("Insufficient funds");
  });

  it("should calculate interest for saving account", () => {
    const account = new BankAccount("savings");

    account.deposit(1);
    account.calculateInterest(100);

    expect(account.checkBalance()).toBe(2);
  });

  it("should throw an error if calculating interests on a checking account", () => {
    const account = new BankAccount("checking");

    expect(() => account.calculateInterest(5)).toThrow(
      "Interest can only be calculated for savings account"
    );
  });

it("should throw an error if the account type is invalid", () => {
    expect(() => new BankAccount("sdfsfd" as any)).toThrow("Invalid account type");
});
});
