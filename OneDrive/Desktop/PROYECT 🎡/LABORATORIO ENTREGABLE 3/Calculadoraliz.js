function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: División por cero";
    }
    return num1 / num2;
  } else {
    return "Operación no válida";
  }
}

function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerText = "Por favor, ingresa números válidos.";
    return;
  }

  const resultado = realizarOperacion(num1, num2, operacion);
  document.getElementById("resultado").innerText = "Resultado: " + resultado;}
