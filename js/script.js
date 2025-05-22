///// Ejercicio #1
function cambiarTexto() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Bienvenido de nuevo";
}

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

// Definimos una constante para el mínimo de caracteres
const MINIMO_CARACTERES = 3 ;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnComentario").addEventListener("click", agregarComentario);
  document.getElementById("btnImagen").addEventListener("click", agregarImagen);
  document.getElementById("btnItem").addEventListener("click", agregarItem);
  // ejercicio #9
  document.getElementById('validateFormEj9').addEventListener('submit', validarFormularioEj9);
  // ejercicio #17
  document.getElementById('btnSumar').addEventListener('click', actionSuma);
  document.getElementById('btnSaludar').addEventListener('click', saludar);
});

const actionSuma = (evento) => {
  evento.preventDefault();
  const num1 = parseInt(document.getElementById('fnumber').value, 10);
  const num2 = parseInt(document.getElementById('snumber').value, 10);
  const result = document.getElementById('resultado');

  result.value = sumarArrow(num1, num2);
}

const sumarArrow = (a, b) => a + b;
const saludar = () => alert(`Bienvenido`);


function agregarComentario() {
  const texto = document.getElementById("inputComentario").value;
  if (texto.trim() !== "") {
    const comentario = document.createElement("p");
    comentario.textContent = texto;
    document.getElementById("comentarios-7").appendChild(comentario);
    document.getElementById("inputComentario").value = ""; 
  }
}

function agregarImagen() {
  const url = document.getElementById("inputImagen").value;
  if (url.trim() !== "") {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen agregada por el usuario";
    img.style.width = "100px";
    img.style.marginRight = "10px";
    document.getElementById("galeria-7").appendChild(img);
    document.getElementById("inputImagen").value = ""; 
  }
}

function agregarItem() {
  const texto = document.getElementById("inputItem").value;
  if (texto.trim() !== "") {
    const item = document.createElement("li");
    item.textContent = texto;
    document.getElementById("lista-7").appendChild(item);
    document.getElementById("inputItem").value = ""; 
  }
}

// Ejercicio #9

function validarFormularioEj9(evento) {
  evento.preventDefault();
  const usuario = document.getElementById('fname').value;
  const apellido = document.getElementById('lname').value;
  const email = document.getElementById('email').value;

  if (usuario.length < MINIMO_CARACTERES) {
      alert('El nombre no es válido');
      return;
  }
  if (apellido.length < MINIMO_CARACTERES) {
      alert('El apellido no es válido');
      return;
  }
  if (email.length < MINIMO_CARACTERES) {
      alert('El email no es válido');
      return;
  }
  if (!email.includes('@')) {
      alert('El email no es válido');
      return;
  }

  alert(enviar(usuario));
}

const enviar = (nombre) => `Hola ${nombre}, el formulario se ha enviado correctamente`;

///// Ejercicio #10
function verificar10() {
  const edad10 = parseInt(document.getElementById("edad10").value);
  const cliente10 = document.getElementById("cliente10").value;
  let mensaje = "";
 
  if (edad10 >= 18) {
    mensaje += "✅ Acceso permitido.<br>";
  } else {
    mensaje += "❌ Acceso denegado.<br>";
  }
  
  if (cliente10 === "premium") {
    mensaje += " Descuento del 20% aplicado.";
  } else if (cliente10 === "regular") {
    mensaje += " Descuento del 10% aplicado.";
  } else {
    mensaje += " No aplica descuento.";
  }
  
  document.getElementById("resultado10").innerHTML = mensaje;
}









///// Ejercicio #13

function sumar() {
  const num1 = Number(document.getElementById("num1Franklin").value);
  const num2 = Number(document.getElementById("num2Franklin").value);
  const resultado = num1 + num2;
  document.getElementById("resultadoSumaFranklin").innerText =
    "Resultado: " + resultado;
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

///// Ejercicio #18

function mostrarAlert() {
  setTimeout(function () {
      const alerta = alert("Este es un mensaje de alerta");
  }, 3000);
}


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

///// Ejercicio #25
const imageness= [
  "./img/1.jpg",
  "./img/2.gif",
  "./img/3.webp",
  "./img/4.jpg",
];

let indiceActual = 0;

function mostrarImagen() {
  const img = document.getElementById("imagen");
  img.src = imageness[indiceActual];
}

function siguiente() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen();
}

function anterior() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
}



//// Ejercicio #28

const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("togglePassword");

toggleIcon.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleIcon.textContent = isPassword ? "🙈" : "👁️";
});





