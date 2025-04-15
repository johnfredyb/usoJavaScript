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

// Lista de productos usando ciclo for
const listaProductos = document.getElementById("productos");
let productos = ["Manzana Verde", "Papa Amarilla", "Arroz", "Papa Pastusa"]
cargarProductos();

// Cargar los productos
function cargarProductos() {
  listaProductos.innerHTML = ""
  for (let i = 0; i < productos.length; i++) {
    const li = document.createElement("li");
    li.textContent = productos[i];
    listaProductos.appendChild(li);
  }
}

// Añadir un producto
function añadirProducto() {
  const inputProducto = document.getElementById("productoEje6");
  if (inputProducto.value.trim() != "") {
    productos.push(inputProducto.value.trim());
    cargarProductos();
  }
  inputProducto.value = "";
}

// Limpiar lista de productos
document.getElementById("limpiarPBtnEje6").addEventListener("click", () => {
  listaProductos.innerHTML = ""
  productos.length = 0;
});


// Lista de comentario usando forEach
const listaComentarios = document.getElementById("comentarios");
let comentarios = ["¿Como estas?", "Me alegro mucho de verte", "No me gusto", "Esperaba más"];
cargarComentarios();

// Cargar los comentarios
function cargarComentarios() {
  listaComentarios.innerHTML = ""
  comentarios.forEach(comentario => {
    const li = document.createElement("li");
    li.textContent = comentario;
    listaComentarios.appendChild(li);
  });
}

// Añadir un comentario
function publicarComentario() {
  const inputComentario = document.getElementById("comentarioEje6");
  if (inputComentario.value.trim() != "") {
    comentarios.push(inputComentario.value.trim());
    cargarComentarios();
  }
  inputComentario.value = "";
}

// Limpiar lista de comentarios
document.getElementById("limpiarCBtnEje6").addEventListener("click", () => {
  listaComentarios.innerHTML = ""
  comentarios.length = 0;
});

///// Ejercicio #21

// Mostrar el clima actual
obtenerClimaActual("cucuta");
function obtenerClimaActual(ciudad) {
  const API_KEY = "a440a60747bc443fbc0230202251404";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${ciudad}`;
  const clima = document.getElementById("clima");
  fetch(API_URL)
    .then(response => response.json())
    .then(data => clima.textContent = data.current.temp_c)
    .catch(error => console.error('Error:', error));
}

// Elegir otra ciudad
const ciudades = document.getElementById('ciudades');

ciudades.addEventListener('change', function () {
  const ciudad = ciudades.value;
  obtenerClimaActual(ciudad)
});

// Obtener lista de usuarios desde JSON

const listaUsuarios = document.getElementById('usuarios');
function generarUsuarios() {
  const API_URL = "https://randomuser.me/api/?results=7"
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      listaUsuarios.innerHTML = "" //Se deja dentro del Fetch por que a veces genera el doble de usuarios al darle varias veces
      const nombres = data.results.map(user => `${user.name.first} ${user.name.last}`);
      for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombres[i];
        usuarios.appendChild(li);
      }
    });
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
