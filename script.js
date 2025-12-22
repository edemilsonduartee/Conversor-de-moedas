const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#currency-to");
const currencyFromSelect = document.querySelector("#currency-from");

const currencies = {
    real: {
        rate: 1,
        locale: "pt-BR",
        currency: "BRL",
        name: "R$ Real Brasileiro",
        image: "/img/bandeiraBrasil.png"
    },
    dolar: {
        rate: 5.65,
        locale: "en-US",
        currency: "USD",
        name: "US$ Dólar Americano",
        image: "/img/bandeiraEUA.png"
    },
    euro: {
        rate: 6.20,
        locale: "de-DE",
        currency: "EUR",
        name: "€ Euro",
        image: "/img/EURO.png"
    },
    libra: {
        rate: 7.30,
        locale: "en-GB",
        currency: "GBP",
        name: "£ Libra Esterlina",
        image: "./img/libra.png"
    },
    bitcoin: {
        rate: 134000,
        locale: "en-US",
        currency: "BTC",
        name: "₿ Bitcoin",
        image: "./img/bitcoin.png"
    }
};

function convertValues() {
    const inputValue = Number(document.querySelector(".input-value").value);

    const currencyFrom = currencies[currencyFromSelect.value];
    const currencyTo = currencies[currencySelect.value];

    if (!currencyFrom || !currencyTo) return;
    const fromValueEl = document.querySelector("#real-value");
    const toValueEl = document.querySelector("#converted-value");

    fromValueEl.classList.remove("fade");
    toValueEl.classList.remove("fade");

    void fromValueEl.offsetWidth;
    void toValueEl.offsetWidth;



    //converte para real primeiro
    const valueInReal = inputValue * currencyFrom.rate;
    //depois converte para a moeda desejada
    const convertedValue = valueInReal / currencyTo.rate;

    fromValueEl.innerHTML = new Intl.NumberFormat(currencyFrom.locale, {
        style: "currency",
        currency: currencyFrom.currency
    }).format(inputValue);

    toValueEl.innerHTML = new Intl.NumberFormat(currencyTo.locale, {
        style: "currency",
        currency: currencyTo.currency
    }).format(convertedValue);

    fromValueEl.classList.add("fade");
    toValueEl.classList.add("fade");


}

function changeCurrency() {
    const currencyToName = document.getElementById("currency-name");
    const currencyToImage = document.querySelector("#currency-image");

    const currencyFromName = document.getElementById("currency-from-name");
    const currencyFromImage = document.querySelector("#currency-from-image");

    const selectedCurrencyTo = currencies[currencySelect.value];
    const selectedCurrencyFrom = currencies[currencyFromSelect.value];

    if (!selectedCurrencyTo || !selectedCurrencyFrom) return;

    // Atualiza moeda DESTINO
    currencyToName.innerHTML = selectedCurrencyTo.name;
    currencyToImage.src = selectedCurrencyTo.image;

    // Atualiza moeda ORIGEM
    currencyFromName.innerHTML = selectedCurrencyFrom.name;
    currencyFromImage.src = selectedCurrencyFrom.image;

    currencyToName.classList.remove("fade");
    currencyToImage.classList.remove("fade");
    currencyFromName.classList.remove("fade");
    currencyFromImage.classList.remove("fade");

    void currencyToName.offsetWidth;
    void currencyToImage.offsetWidth;
    void currencyFromName.offsetWidth;
    void currencyFromImage.offsetWidth;

    currencyToName.classList.add("fade");
    currencyToImage.classList.add("fade");
    currencyFromName.classList.add("fade");
    currencyFromImage.classList.add("fade");


    convertValues();
}


currencySelect.addEventListener("change", changeCurrency);
currencyFromSelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
