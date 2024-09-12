

//Azul

function pintarazul(color){
cuadradoAzul = document.querySelector("#azul");
cuadradoAzul.style.backgroundColor = color;
}
const btnAzul = cuadradoAzul.addEventListener("click", pintar);


//Rojo
function pintarrojo(color){
    cuadradoRojo = document.querySelector("#rojo");
    cuadradoRojo.style.backgroundColor = color;
}
const btnRojo = cuadradoRojo.addEventListener("click", pintar);

// Verde

function pintarverde(color){
cuadradoVerde = document.querySelector("#verde");
cuadradoVerde.style.backgroundColor = color;
}
const btnVerde = cuadradoVerde.addEventListener("click", pintar);

// Amarillo

function pintaramarillo(color){
cuadradoAmarillo = document.querySelector("#amarillo");
cuadradoAmarillo.style.backgroundColor = color;
}

const btnAmarillo = cuadradoAmarillo.addEventListener("click", pintar);
