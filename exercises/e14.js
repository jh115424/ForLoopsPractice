// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let deposits = [];

  // Your code goes here...

  for (let account in array) {
    let depositData = array[account].deposits;
    let depositTotal = 0;

    if (depositData) {
      for (let i = 0; i < depositData.length; i++) {
        depositTotal += parseFloat(depositData[i]);
      }
    }

    let withDrawalData = array[account].withdrawals;
    let withDrawalTotal = 0;

    if (withDrawalData) {
      for (let i = 0; i < withDrawalData.length; i++) {
        withDrawalTotal += parseFloat(withDrawalData[i]);
      }
    }
    let accountBalance = array[account].balance;

    if (accountBalance != depositTotal - withDrawalTotal) {
      deposits.push(array[account]);
    }
  }

  return deposits;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
