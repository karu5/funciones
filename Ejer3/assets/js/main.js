// DECLARO LOS COLORES EN LAS CAJAS

pintarFondo = function(id, color) {
    box = document.getElementById(id);
    box.style.backgroundColor = color;
}

// LES DOY UN COLOR DE FONDO A CADA CONTENEDOR

pintarFondo('container1', 'yellow')
pintarFondo('container2', 'red')
pintarFondo('container3', 'blue')
pintarFondo('container4', 'green')

// CREO LA DECLARACIÓN DE LA FUNCIÓN EN UN BLOQUE //

cambiarColorFondo = function(contenedor) {
    contenedor.style.backgroundColor = 'black'
}

// LLAMO A LA FUNCIÓN
let contenedor1 = document.getElementById('container1');
contenedor1.addEventListener('click', function() {
    cambiarColorFondo(contenedor1)
})

let contenedor2 = document.getElementById('container2');
contenedor2.addEventListener('click', function() {
    cambiarColorFondo(contenedor2)
})

let contenedor3 = document.getElementById('container3');
contenedor3.addEventListener('click', function() {
    cambiarColorFondo(contenedor3)
})

let contenedor4 = document.getElementById('container4');
contenedor4.addEventListener('click', function() {
    cambiarColorFondo(contenedor4)
})




