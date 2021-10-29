// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const contain = document.getElementById("container");

// prima di tutto scriviamo i prompt fuori dalla funzione

const choose = prompt("Scegli e poi scrivi pari o dispari (solo lettere minuscole)");
const chooseNum = parseInt(prompt("inserisci un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).





function pcRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min);

    

}

// Salviamo la funzione in una variabile

let numPc = pcRandom(5, 1);
console.log(numPc);

// sommiamo

let sum = numPc + chooseNum;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariODispari(choose) {
    let = risultato;
    if (choose === "pari" && sum % 2 == 0) {
        risultato = ("Hai vinto!");

    } else if (choose === "dispari" && sum % 2 !== 0) {
        risultato = ("Hai vinto!")

    } else {
        risultato = ("Hai perso! :(")
    }

    return risultato;
}

// Salviamo la funzione in una variabile

let winLoose = pariODispari(result);


