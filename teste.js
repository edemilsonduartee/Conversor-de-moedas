/*const button = document.getElementById("convert-button");

button.addEventListener("click", convertValues);

function convertValues() {
  const inputValue = document.getElementById("input-value").value;
  const currencyFrom = document.getElementById("currency-from").value;
  const currencyTo = document.getElementById("currency-to").value;

  const realValueText = document.getElementById("real-value");
  const convertedValueText = document.getElementById("converted-value");

  if (!inputValue || inputValue <= 0) {
    alert("Digite um valor válido");
    return;
  }

  const dolar = 5.20;
  const euro = 5.60;

  const valueInReal = Number(inputValue);

  // Mostra o valor de origem (Real)
  realValueText.innerHTML = valueInReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Converte para a moeda selecionada
  let convertedValue = 0;

  if (currencyTo === "dolar") {
    convertedValue = valueInReal / dolar;

    convertedValueText.innerHTML = convertedValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  if (currencyTo === "euro") {
    convertedValue = valueInReal / euro;

    convertedValueText.innerHTML = convertedValue.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  }
}
  */