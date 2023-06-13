// Generar un número aleatorio entre 1 y 100
let numeroAzar =  Math.floor(Math.random() * 100) + 1;
    console.log(numeroAzar);

//    funcion para volver a jugar
function numeroAlAzar(){
    numeroEntrada.disabled = false;
    numeroEntrada.value = 0;
    intento.textContent = 0;
    location.reload();
}

// Obtener los elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0

// Función para comprobar el número ingresado por el usuario
function chequearResultado() {
    intentos ++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);


    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje.style.color = 'brown';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje.style.color = 'orange';
    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'red';
    }
}
