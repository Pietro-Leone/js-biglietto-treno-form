// Dichiarazione Variabili e Costanti
const nameInputElement = document.getElementById("inputName");
const kilometersInputElement = document.getElementById("inputKilometers");
const ageInputElement = document.getElementById("inputAge");
const biglietto = document.getElementById("biglietto")
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getUTCMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = ` ${currentDay}/${currentMonth}/${currentYear} `
const btnGenerate = document.querySelector(".genera-button");
const btnReset = document.querySelector(".reset-button");

document.getElementById("date").innerHTML = `${currentDate}`

// Evento al click del bottone "Reset"
btnReset.addEventListener("click", function () {
    // biglietto.classList.replace("d-block", "d-none");
    location.reload();
})

// Evento al click del bottone "Genera"
btnGenerate.addEventListener("click", function () {
    biglietto.classList.replace("d-none", "d-block");
    const name = nameInputElement.value;
    document.getElementById("name").innerHTML = `${name}`

    // Randomizzo il cp
    const randomNum = Math.floor(Math.random() * 900000) + 100000;
    document.getElementById("random").innerHTML = `${randomNum}`


    const kilometers = kilometersInputElement.value;
    const userAge = ageInputElement.value;

    let discount = 0;

    // Validazione dati inseriti
    if (isNaN(kilometers) || kilometers <= 0 || isNaN(userAge)) {
        alert("Ricarica la pagina e inserisci dei dati validi");
        location.reload();
    }

    // Calcolo kilometri * prezzo al kilometro
    const kmPrice = kilometers * 0.21;

    // Blocco IF che in base all'età inserita calcola eventuali sconti
    if (userAge == 1) {
        document.getElementById("age").innerHTML = "Bambino"
        discount = 0.2
    }
    else if (userAge == 3) {
        discount = 0.4
    }

    document.getElementById("price").innerHTML = `${(kmPrice - (kmPrice * discount)).toFixed(2)}€`

})