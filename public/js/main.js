console.log("JS File is linked");

// let convert = document.querySelector("#convert");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#convert").onclick = e => {
    e.preventDefault();
    let currency = document.querySelector("#currency").value;
    currency = currency.toUpperCase();
    console.log(currency);

    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const contents = `1 USD is equal to ${
          data.rates[currency]
        } ${currency}`;
        document.querySelector("#result").innerHTML = contents;
        document.querySelector('#currency').value = '';
      })
      .catch(() => {
        document.querySelector("#result").innerHTML = `Enter correct currency code.`;
      });
    return false;
  };
});
