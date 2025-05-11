// Importiamo il modulo da testare
const operations = require('../src/operations');

test('Somma 2 + 2 restituisce 4', () => {
  expect(operations.add(2, 2)).toBe(4);
});

test('Sottrai 5 - 3 restituisce 2', () => {
  expect(operations.subtract(5, 3)).toBe(2);
});

test('Moltiplica 3 * 4 restituisce 12', () => {
  expect(operations.multiply(3, 4)).toBe(12);
});

test('Dividi 10 / 2 restituisce 5', () => {
  expect(operations.divide(10, 2)).toBe(5);
});

test('Divisione per zero lancia un errore', () => {
  expect(() => operations.divide(5, 0)).toThrow("Divisione per zero non consentita.");
});

test('Potenza 2^3 restituisce 8', () => {
  expect(operations.power(2, 3)).toBe(8);
});

// Test per l'addizione "sbagliata"
test.skip('Somma 3 + 5 ma verifica se è uguale a 7 (dovrebbe fallire)', () => {
  const result = operations.add(3, 5);
  expect(result).toBe(7); // Questa asserzione fallirà
});
