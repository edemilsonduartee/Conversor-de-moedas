const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#currency-to");


function convertValues() {
    const inputValue = Number(document.querySelector(".input-value").value);
    const currencyFrom = document.querySelector("#real-value") //valor em real
    const currencyTo = document.querySelector("#converted-value");  //outras moedas


    const dolarToday = 5.65;
    const euroToday = 6.20;
    const bitcoinToday = 134000.00;
    const libraToday = 7.30;


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

    if (currencySelect.value === "libra") { // SE O VALOR DA LIBRA FOR SELECIONADO, IRA FAZER A CONVERSÃO PARA LIBRA

        currencyTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue / libraToday);
    };

    if (currencySelect.value === "bitcoin") { // SE O VALOR DO BITCOIN FOR SELECIONADO, IRA FAZER A CONVERSÃO PARA BITCOIN

        currencyTo.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue / bitcoinToday);
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
    
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "£ Libra Esterlina";
        currencyImage.src = "./img/libra.png";
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin";
        currencyImage.src = "./img/bitcoin.png";
    }



    convertValues();
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);