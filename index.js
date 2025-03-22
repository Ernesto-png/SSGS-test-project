// index.js
const readline = require('readline-sync');
const operations = require('./operations');

console.log("Benvenuto nella calcolatrice CLI!");
console.log("Operazioni supportate:");
console.log("1. Addizione");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");
console.log("5. Potenza");

const operation = readline.question("Seleziona un'operazione (1-5): ");
const num1 = parseFloat(readline.question("Inserisci il primo numero: "));
const num2 = parseFloat(readline.question("Inserisci il secondo numero: "));

try {
  let result;
  switch (operation) {
    case '1':
      result = operations.add(num1, num2);
      break;
    case '2':
      result = operations.subtract(num1, num2);
      break;
    case '3':
      result = operations.multiply(num1, num2);
      break;
    case '4':
      result = operations.divide(num1, num2);
          break;
    case '5':
      result = operations.power(num1, num2);
    break;
    default:
      console.log("Operazione non valida.");
      process.exit(1);
  }
  console.log(`Risultato: ${result}`);
} catch (error) {
  console.log(`Errore: ${error.message}`);
}

console.log("Grazie per aver usato la calcolatrice. Arrivederci!");
