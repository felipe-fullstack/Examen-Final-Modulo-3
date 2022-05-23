var square = document.querySelectorAll("#square");
var h1 = document.getElementById("h1");
var element = document.getElementById("primero");
var elements = document.getElementById("segundo");
var elements2 = document.getElementById("message");
var boton = document.getElementById("reset");
var botonDificil = document.getElementById("hardBtn");
var btnFacil = document.getElementById("easyBtn");
var hh = document.getElementById("hh");
var container = document.getElementById("container");
var messageDisplay = document.querySelector("#message");
function rgbAleatorio() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
const colors = [
  rgbAleatorio(),
  rgbAleatorio(),
  rgbAleatorio(),
  rgbAleatorio(),
  rgbAleatorio(),
  rgbAleatorio(),
]
const colors2 = [
  rgbAleatorio(),
  rgbAleatorio(),
  rgbAleatorio(),
]
$(document).ready(function () {
  botonDificil.style = "visibility: hidden"
  btnFacil.style = "visibility: hidden"
  element.style = "visibility: hidden"
  elements.style = "visibility: hidden"
});
boton.addEventListener("click", function () {
  botonDificil.style = "visibility: visible"
  btnFacil.style = "visibility: visible"
  boton.style = "visibility: hidden"
  hh.style = "visibility: hidden"
  h1.style = "visibility: visible"
});
botonDificil.addEventListener("click", function () {
  divColorsModoDificil()
});
btnFacil.addEventListener("click", function () {
  divColorsModoFacil()
});
function divColorsModoDificil() {
  if (elements2) {
    element.style = "visibility: visible"
    elements.style = "visibility: visible"
  }
  botonDificil.style = "color: white; background: steelblue"
  btnFacil.style = "color: steelblue; background: white"
  container.style.backgroundColor = "inherit"
  addElementsById()
  if (elements2.innerHTML) {
    elements2.innerHTML = ""
    h1.style.backgroundColor = "inherit"
  }
  var myArray = []
  while (myArray.length < colors.length) {
    var numeroAleatorio = Math.floor(Math.random() * colors.length);
    var existe = false;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] == colors[numeroAleatorio]) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      myArray[myArray.length] = colors[numeroAleatorio];
    }
    validarModoDificil()
  }
  square[0].style.backgroundColor = myArray[0];
  square[1].style.backgroundColor = myArray[1];
  square[2].style.backgroundColor = myArray[2];
  square[3].style.backgroundColor = myArray[3];
  square[4].style.backgroundColor = myArray[4];
  square[5].style.backgroundColor = myArray[5];
  h1.textContent = myArray[numeroAleatorio];
}
function removeElementsById() {
  elements.style = "visibility: hidden"
  elements2.innerHTML = ""
  h1.style.backgroundColor = "inherit"
}
function addElementsById() {
  var elements = document.getElementById("segundo");
  elements.style = "visibility: visible"
}
function divColorsModoFacil() {
  if (elements2) {
    element.style = "visibility: visible"
  }
  container.style.backgroundColor = "inherit"
  btnFacil.style = "color: white; background: steelblue"
  botonDificil.style = "color: steelblue; background: white"
  removeElementsById()
  var myArray = []
  while (myArray.length < colors2.length) {
    var numeroAleatorio = Math.floor(Math.random() * colors2.length);
    var existe = false;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] == colors2[numeroAleatorio]) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      myArray[myArray.length] = colors2[numeroAleatorio];
    }
    validarModoFacil()
  }
  square[0].style.backgroundColor = myArray[0];
  square[1].style.backgroundColor = myArray[1];
  square[2].style.backgroundColor = myArray[2];
  h1.textContent = myArray[numeroAleatorio];
}
function validarModoFacil() {
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor
      var pickedColor = document.getElementById("h1").innerHTML
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "¡GANASTE! . Intentalo Nuevamente →"
        boton.textContent = "¡Intenta nuevamente!"
        cambiaColor(clickedColor)
        container.style.background = this.style.background
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "¡No es el color!";
      }
    })
  }
}
function validarModoDificil() {
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor
      var pickedColor = document.getElementById("h1").innerHTML
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "¡GANASTE! . Intentalo Nuevamente →"
        boton.textContent = "¡Intenta nuevamente!"
        cambiaColor(clickedColor)
        container.style.background = this.style.background
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "¡No es el color!";
      }
    })
  }
}
function cambiaColor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color
  }
}
