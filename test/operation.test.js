// Importiamo il modulo da testare
const operations = require('../src/operations');

// Test per l'addizione corretta
test('Somma 2 + 2 restituisce 4', () => {
  const result = operations.add(2, 2);
  expect(result).toBe(4);
});

// Test per l'addizione "sbagliata"
test('Somma 3 + 5 ma verifica se è uguale a 7 (dovrebbe fallire)', () => {
  const result = operations.add(3, 5);
  expect(result).toBe(7);
});

// Test per la sottrazione
test('Sottrai 5 - 3 restituisce 2', () => {
  const result = operations.subtract(5, 3);
  expect(result).toBe(2);
});

// Test per la moltiplicazione
test('Moltiplica 3 * 4 restituisce 12', () => {
  const result = operations.multiply(3, 4);
  expect(result).toBe(12);
});

// Test per la divisione
test('Dividi 10 / 2 restituisce 5', () => {
  const result = operations.divide(10, 2);
  expect(result).toBe(5);
});

// Test per la divisione per zero
test('Divisione per zero lancia un errore', () => {
  expect(() => operations.divide(5, 0)).toThrow("Divisione per zero non consentita.");
});

// Test per la potenza
test('Potenza 2^3 restituisce 8', () => {
  const result = operations.power(2, 3);
  expect(result).toBe(8);
});

test('Potenza 5^0 restituisce 1', () => {
  const result = operations.power(5, 0);
  expect(result).toBe(1);
});
