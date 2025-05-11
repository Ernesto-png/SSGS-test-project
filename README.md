## 🧮 Node.js Calculator Project

Questo progetto è una semplice **calcolatrice** sviluppata in **Node.js** che permette di eseguire operazioni matematiche di base attraverso una **applicazione a riga di comando (CLI)**.

---

## 📋 Requisiti
- **Node.js**: v16.x o v18.x (LTS consigliata)
- **npm**: Versione 8 o superiore

---

## 📥 Installazione
1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-username/ssgs-calc.git
   cd ssgs-calc
2. Installa le dipendenze:
   ```bash
   npm install

---

## 🚀 Funzionalità
Operazioni di base:
  - Addizione
  - Sottrazione
  - Moltiplicazione
  - Divisione (con gestione degli errori, ad esempio divisione per zero)

Funzionalità aggiuntive implementate:
  - Potenza: Calcolo di una potenza a^b.
  - Saluto: Il programma mostra un messaggio di saluto prima di chiudersi.

---

## 🎮 Utilizzo

1. Avvia l'applicazione:
   ```bash
   npm start

2. Segui le istruzioni sulla riga di comando:
  - Scegli un'operazione (ad esempio, addizione o potenza).
  - Inserisci i numeri richiesti.
  - Ottieni il risultato.
  
3. Esempio di sessione:
   ```bash
   Benvenuto nella calcolatrice CLI!
   Operazioni supportate:
   1. Addizione
   2. Sottrazione
   3. Moltiplicazione
   4. Divisione
   5. Potenza
    
   Seleziona un'operazione (1-5): 5
   Inserisci il primo numero: 2
   Inserisci il secondo numero: 3
   Risultato: 8
   Grazie per aver usato la calcolatrice. Arrivederci!

---


## 📂 Struttura del Progetto
    .
    ├── index.js              # Punto di ingresso principale dell'applicazione
    ├── operations.js         # Modulo con le funzioni matematiche
    ├── operations.test.js    # File di test per il modulo operations
    ├── package.json          # Configurazione del progetto Node.js
    └── .github/workflows/ci.yml  # Configurazione della pipeline CI con GitHub Actions

---

## 🛠️ Pipeline CI
La pipeline automatica su GitHub Actions esegue i test con Jest e verifica il code coverage.
Ogni commit su main attiva la pipeline.

---

## 🧪 Test
1. Esegui i test unitari con:
   ```bash
   npm test

2 .Il test verifica le seguenti operazioni:
  - Addizione, sottrazione, moltiplicazione, divisione.
  - Gestione degli errori (es. divisione per zero).
  - Funzionalità avanzate come la potenza.
  
3. Code Coverage:
Il coverage dei test viene mostrato automaticamente nei log:
  
  ```plaintext
  -----------------|---------|----------|---------|---------|-------------------
  File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
  -----------------|---------|----------|---------|---------|-------------------
  All files        |   100%  |    100%  |   100%  |   100%  |
  operations.js    |   100%  |    100%  |   100%  |   100%  |
  -----------------|---------|----------|---------|---------|-------------------
