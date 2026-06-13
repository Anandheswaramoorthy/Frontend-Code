// ===============================
// Example 1 : Basic Closure
// ===============================

function outer() {
    var a = 3;

    return function inner() {
        console.log(a);
    };
}

let res = outer();

res();
res();


// ===============================
// Example 2 : Bank Account Closure
// ===============================

function createBankAccount(initialBalance) {

    let balance = initialBalance;

    return {

        deposit: function(amount) {
            balance += amount;
            console.log(
                `Deposited: ${amount}, Balance: ${balance}`
            );
        },

        withdraw: function(amount) {

            if (amount > balance) {
                console.log("Insufficient funds!");
            }
            else {
                balance -= amount;

                console.log(
                    `Withdrew: ${amount}, Balance: ${balance}`
                );
            }
        }

    };
}


const myAccount = createBankAccount(1000);

myAccount.deposit(500);

myAccount.withdraw(300);