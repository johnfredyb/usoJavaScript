///// Ejercicio #1

///// Ejercicio #2

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

  