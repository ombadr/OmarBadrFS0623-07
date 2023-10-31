/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num1 = 2000;
const num2 = 200;

if (num1 > num2) {
  console.log(num1)
} else {
  console.log(num2);
} */



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num = 35;

if (num !== 5) {
  console.log("not equal");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num = 25;

if (inputNumber1 % 5 === 0) {
  console.log("divisibile per 5")
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num1 = 8;

const num2 = 10;

if (num1 === 8 || num2 === 8 || num1 - num2 === 8) {
  console.log(true)
} else {
  console.log(false)
} */



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = 0;
let costoSpedizione = 10;

if (totalShoppingCart > 50) {
  return totalShoppingCart;
} else {
  return totalShoppingCart += costoSpedizione;
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let totalShoppingCart = 40;
let costoSpedizione = 10;

if (totalShoppingCart > 50) {
  totalShoppingCart *= 0.8;
} else {
  totalShoppingCart  *= 0.8;
  totalShoppingCart += costoSpedizione;
}

console.log(totalShoppingCart);

*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let num1 = 2;
let num2 = 37;
let num3 = 400;

if (num1 < num2) {
  let temp = num1
  num1 = num2
  num2 = temp
}

if (num2 < num3) {
  let temp = num2
  num2 = num3
  num3 = temp
}

if (num1 < num2) {
  let temp = num1
  num1 = num2
  num2 = temp
}


console.log(num1, num2, num3);

*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let num = 432.32

if (typeof num === "number" && !Number.isNaN(num)) {
  console.log('Si tratta di un numero')
} else {
  console.log('Si tratta di altro')
}

*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/*
let num = 4324;

if (num % 2 === 0) {
  console.log(`Il numero ${num} è pari`)
} else {
  console.log(`Il numero ${num} è dispari`)
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let val = 11
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}

*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}

delete me.lastName;

*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}

delete me.skills.pop()

*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
arr[arr.length - 1] = 100;
*/


/* ESERCIZIO 16
 Creare il profilo di una persona e far verificare all'utente se al profilo ci sia o meno una proprietà e se non c'è inserirla. E se c'è modificarla
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
  name: 'Nome',
  cognome: 'Cognome',
  anni: 99,
  nazione: 'Italia'
}

const propertyToCheck = prompt("Controllo proprietà: ")

if (persona.hasOwnProperty(propertyToCheck)) {
  console.log('Esiste')
} else {

  const newPropertyValue = prompt("La proprietà non esiste, inserisci il nuovo valore: ")

  persona[propertyToCheck] = newPropertyValue;
}

console.log(persona)
