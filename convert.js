// Node.js Currency Converter (INR <-> USD)
const readline = require('readline');

// Fixed conversion rates
const INR_TO_USD_RATE = 0.012; // Example: 1 INR = 0.012 USD
const USD_TO_INR_RATE = 82;    // Example: 1 USD = 82 INR

// Create a command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
  if (fromCurrency === 'INR' && toCurrency === 'USD') {
    return amount * INR_TO_USD_RATE;
  } else if (fromCurrency === 'USD' && toCurrency === 'INR') {
    return amount * USD_TO_INR_RATE;
  } else {
    return null; // Invalid conversion
  }
}

// Menu function
function showMenu() {
  console.log(`\nCurrency Converter:\n`);
  console.log(`1. Convert INR to USD`);
  console.log(`2. Convert USD to INR`);
  console.log(`3. Exit`);
  rl.question('Choose an option (1/2/3): ', handleUserInput);
}

// Handle user input
function handleUserInput(option) {
  switch (option) {
    case '1':
      rl.question('Enter amount in INR: ', (amount) => {
        const converted = convertCurrency(parseFloat(amount), 'INR', 'USD');
        console.log(`${amount} INR = ${converted.toFixed(2)} USD`);
        showMenu();
      });
      break;

    case '2':
      rl.question('Enter amount in USD: ', (amount) => {
        const converted = convertCurrency(parseFloat(amount), 'USD', 'INR');
        console.log(`${amount} USD = ${converted.toFixed(2)} INR`);
        showMenu();
      });
      break;

    case '3':
      console.log('Exiting the program. Goodbye!');
      rl.close();
      break;

    default:
      console.log('Invalid option. Please try again.');
      showMenu();
      break;
  }
}

// Start the program
console.log('Welcome to the Currency Converter!');
showMenu();
