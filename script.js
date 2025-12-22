const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#currency-to");


function convertValues() {
    const inputValue = Number(document.querySelector(".input-value").value);
    const currencyFrom = document.querySelector("#real-value") //valor em real
    const currencyTo = document.querySelector("#converted-value");  //outras moedas


    const dolarToday = 5.65;
    const euroToday = 6.20;


    if (currencySelect.value === "dolar") {   // SE O VALOR DO DOLAR FOR SELECIONADO, IRA FAZER A CONVERSÃO PARA DOLAR

        currencyTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolarToday);
    }

    if (currencySelect.value === "euro") { // SE O VALOR DO EURO FOR SELECIONADO, IRA FAZER A CONVERSÃO PARA EURO

        currencyTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euroToday);
    };

    currencyFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue);




  
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector("#currency-image");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "US$ Dólar Americano";
        currencyImage.src = "/img/bandeiraEUA.png";
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "€ Euro";
        currencyImage.src = "/img/EURO.png";
    }


    convertValues();
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);