/*Problem Statement: You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow 
users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

Task 2: Implement methods within the Account object to deposit and withdraw funds.

Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.*/

function BankAccount(accountNumber, balance, owner) {     
	this.accountNumber = accountNumber;
	this.balance = balance;
	this.owner = owner;
}

BankAccount.prototype.deposit = function(amount) {
	if (amount > 0) {
        this.balance += amount;
        console.log("Deposited: $" + amount + " New balance: $" + this.balance);
    } else {
        console.log("Deposit must be greater than 0.");
    }
}

BankAccount.prototype.withdraw = function(amount) {
	if (amount < this.balance) {
        this.balance -= amount;
        console.log("Withdrew: $" + amount + " New balance: $" + this.balance);
    } else {
        console.log("Withdrawl amount is greater than your account balance.");
    }
}

BankAccount.prototype.calculateCompoundInterest = function(interestRate, years) {
    const principal = this.balance;
    const rate = interestRate / 100;
    const n = 1;
    const time = years;

    const amount = principal * Math.pow(1 + rate / n, n * time);
    const interest = amount - principal;

    console.log("After " + years + " years at an interest rate of " + interestRate + "%, the compound interest is: $" + interest.toFixed(2));
    console.log("The total amount (principal + interest) will be: $" + amount.toFixed(2));
}

let account = new BankAccount('12345', 500, 'John Doe');

account.deposit(200)
account.withdraw(300)
account.calculateCompoundInterest(5, 5)



