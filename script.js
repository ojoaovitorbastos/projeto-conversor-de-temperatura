function converter() {
  var valor = document.getElementById("txttemp");
  var temp = Number(valor.value);
  var escolha = document.getElementById("esc-temp");
  var res = document.getElementById("res");

  var temp1 = (temp * 1.8 + 32).toFixed(1)
  var temp2 = ((temp - 32) / 1.8).toFixed(1)

  if (temp == 0 || isNaN(temp)) {
    alert("[ERRO] Digite um valor!");
  } else {
    switch (escolha.value) {
      case "1":
        res.innerHTML = "Resultado:";
        res.innerHTML += ` ${temp}°C para Fahrenheit é igual à <strong>${temp1}°F</strong>`;
        break;

      case "2":
        res.innerHTML = "Resultado:";
        res.innerHTML += ` ${temp}°F para Celcius é igual à <strong>${temp2}</strong>`;
        break;

      default:
        break;
    }
  }
}
