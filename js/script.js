{
    console.log("Hello World!");

    const calculateResult = (amount, currency) => {

        const eur = 4.69;
        const usd = 4.48;
        const gbp = 5.56;

        switch (currency) {
            case "EUR":
                return amount / eur;
            case "USD":
                return amount / usd;
            case "GBP":
                return amount / gbp;
        }

    }

    const formElement = document.querySelector(".js-form");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");
    
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerText = `${amount} PLN to ${result.toFixed(2)} ${currency}.`;

    };

    const init = () => {
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();

}
