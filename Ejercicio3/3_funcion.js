function pintar(Event) {
fondo.style.BackgroundColor = letra ;
}



document.addEventListener('keydown', pintar('letra'));
const fondo = getElementById("key");

if (Event.letra === a) {
    fondo.style.backgroundColor = 'pink';
} else if (Event.letra === s) {
    fondo.style.backgroundColor = 'orange';
} else if (Event.letra === d) {
    fondo.style.backgroundColor = 'blue';
}




