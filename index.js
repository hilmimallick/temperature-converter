function convert() {
  let fahrenheit = document.getElementById("fahrenheit").value;
  let celsius = document.getElementById("celsius").value;

  if (fahrenheit != "") {
    celsius = (eval(fahrenheit) - 32) / 1.8;
  } else {
    fahrenheit = eval(celsius) * 1.8 + 32;
  }

  document.getElementById("fahrenheit").value = eval(fahrenheit).toFixed(1);
  document.getElementById("celsius").value = eval(celsius).toFixed(1);
}

function reset() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
}
