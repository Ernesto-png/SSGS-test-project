// Importiamo il modulo da testare
const operations = require('../src/operations');

// Test per l'addizione corretta
test('Somma 2 + 2 e restituisce 4', () => {
  const result = operations.add(2, 2);
  expect(result).toBe(4); // Asserzione
});

// Test per l'addizione "sbagliata"
test('Somma 3 + 5 ma verifica se è uguale a 7 (dovrebbe fallire)', () => {
  const result = operations.add(3, 5);
  expect(result).toBe(7); // Questa asserzione fallirà
});
