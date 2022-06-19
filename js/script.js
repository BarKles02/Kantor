console.log("Hello World!");

let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let eur = 4.69;
let usd = 4.48;
let gbp = 5.56;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;
    switch (currency) {
        case "EUR":
            result = amount / eur;
            break;
        case "USD":
            result = amount / usd;
            break;
        case "GBP":
            result = amount / gbp;
    }

    resultElement.innerText = `${amount} PLN to ${result.toFixed(2)} ${currency}.`;

})


