// Dichiarazione Variabili e Costanti
const kilometers = 20;
const userAge = 20;
let discount = 0;
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getUTCMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = ` ${currentDay}/${currentMonth}/${currentYear} `

// Validazione dati inseriti
if (isNaN(kilometers) || kilometers <= 0 || isNaN(userAge)) {
    alert("Ricarica la pagina e inserisci dei dati validi");
}

document.getElementById("date").innerHTML = `${currentDate}`

// Calcolo kilometri * prezzo al kilometro
const kmPrice = kilometers * 0.21;

// Blocco IF che in base all'età inserita calcola eventuali sconti
if (userAge < 18){
    document.getElementById("age").innerHTML = "Bambino"
    discount = 0.2
}
else if (userAge >= 65){
    discount = 0.4
}

document.getElementById("price").innerHTML = `${(kmPrice - (kmPrice * discount)).toFixed(2)}€`