///// Ejercicio #1

///// Ejercicio #2
const caja = document.getElementById("caja-diego");

//El color cambia cuando pasamos el mouse por encima
caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "lightgreen";
});

caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightblue";
});

//Aumentamos el tamaño del texto al hacer clic
caja.addEventListener("click", () => {
  if (caja.style.fontSize === "30px") {
    caja.style.fontSize = "20px"; //se regresa al tamaño original
  } else {
    caja.style.fontSize = "30px"; //El texto aumenta su tamaño
  }
});

///// Ejercicio #3

///// Ejercicio #4

///// Ejercicio #5

// Alternar modo oscuro
document.getElementById("modoBtnEje5").addEventListener("click", () => {
  document.querySelector(".columna.ejercicio5").classList.toggle("modo-oscuro");
});

// Validar formulario y marcar errores
function validarFormulario() {
  const nombre = document.getElementById("nombreEje5");
  const correo = document.getElementById("correoEje5");

  // Resetear clases
  nombre.classList.remove("error");
  correo.classList.remove("error");

  if (nombre.value.trim() === "") {
    nombre.classList.add("error");
  }

  if (correo.value.trim() === "") {
    correo.classList.add("error");
  }
}

///// Ejercicio #6

///// Ejercicio #7

///// Ejercicio #24
const imagen = document.getElementById("imagen-diego");

//Listado de imagenes con su respectiva ruta
const imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpeg"];

let indice = 0;

//Cuando hacemos click sobre la imagen, esta cambia por la que le sigue en el arreglo
imagen.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  imagen.src = imagenes[indice];
});
