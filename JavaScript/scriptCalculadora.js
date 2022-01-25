var operandoa;
var operandob;
var operacion;
function init() {
  //Varirables
  var resultado = document.getElementById("resultado");
  var reset = document.getElementById("reset");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  //Eventos
  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  reset.onclick = function (e) {
    resetear();
  };
  suma.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
  };
  resta.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
  };
  multiplicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
  };
  division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
  };
  igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
  };
}
function limpiar() {
  resultado.textContent = "";
}
function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
/*****************Calculadora que convierte de BIT-G3 a pesos colombianos*******************************/
var operandoaBIT;
var operandobBIT;
var operacionBIT;
function initBIT() {
  //Varirables
  var resultadoBIT = document.getElementById("resultadoBIT");
  var resetBIT = document.getElementById("resetBIT");
  var sumaBIT = document.getElementById("sumaBIT");
  var restaBIT = document.getElementById("restaBIT");
  var multiplicacionBIT = document.getElementById("multiplicacionBIT");
  var divisionBIT = document.getElementById("divisionBIT");
  var igualBIT = document.getElementById("igualBIT");
  var unoBIT = document.getElementById("unoBIT");
  var dosBIT = document.getElementById("dosBIT");
  var tresBIT = document.getElementById("tresBIT");
  var cuatroBIT = document.getElementById("cuatroBIT");
  var cincoBIT = document.getElementById("cincoBIT");
  var seisBIT = document.getElementById("seisBIT");
  var sieteBIT = document.getElementById("sieteBIT");
  var ochoBIT = document.getElementById("ochoBIT");
  var nueveBIT = document.getElementById("nueveBIT");
  var ceroBIT = document.getElementById("ceroBIT");
  //Eventos
  unoBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "1";
  };
  dosBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "2";
  };
  tresBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "3";
  };
  cuatroBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "4";
  };
  cincoBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "5";
  };
  seisBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "6";
  };
  sieteBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "7";
  };
  ochoBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "8";
  };
  nueveBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "9";
  };
  ceroBIT.onclick = function (e) {
    resultadoBIT.textContent = resultadoBIT.textContent + "0";
  };
  resetBIT.onclick = function (e) {
    resetearBIT();
  };
  sumaBIT.onclick = function (e) {
    operandoaBIT = resultadoBIT.textContent;
    operacionBIT = "+";
    limpiarBIT();
  };
  restaBIT.onclick = function (e) {
    operandoaBIT = resultadoBIT.textContent;
    operacionBIT = "-";
    limpiarBIT();
  };
  multiplicacionBIT.onclick = function (e) {
    operandoaBIT = resultadoBIT.textContent;
    operacionBIT = "*";
    limpiarBIT();
  };
  divisionBIT.onclick = function (e) {
    operandoaBIT = resultadoBIT.textContent;
    operacionBIT = "/";
    limpiarBIT();
  };
  igualBIT.onclick = function (e) {
    operandobBIT = resultadoBIT.textContent;
    resolverBIT();
  };
}
function limpiarBIT() {
  resultadoBIT.textContent = "";
}
function resetearBIT() {
  resultadoBIT.textContent = "";
  operandoaBIT = 0;
  operandobBIT = 0;
  operacionBIT = "";
}
function resolverBIT() {
  var resBIT = 0;
  switch (operacionBIT) {
    case "+":
      resBIT = (parseFloat(operandoaBIT) * 1) / 37072;
      break;
    case "-":
      resBIT = (parseFloat(operandoaBIT) * 1) / 144916618;
      break;
    case "*":
      resBIT = parseFloat(operandoaBIT) * parseFloat(operandobBIT);
      break;
    case "/":
      resBIT = parseFloat(operandoaBIT) / parseFloat(operandobBIT);
      break;
  }
  resetearBIT();
  resultadoBIT.textContent = resBIT;
}
