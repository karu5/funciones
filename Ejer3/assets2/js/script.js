// PRIMER KEY LO DECLARO Y ASIGNO COLOR
elemento = document.getElementById('key')
elemento.style.backgroundColor = 'white';

// LLAMO A LA FUNCIÓN Y LE ASIGNO UN COLOR A CADA LETRA
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        elemento.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        elemento.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        elemento.style.backgroundColor = 'skyblue';
    }})


// SEGUNDO DIV

elemento = document.getElementById('key2')
elemento.style.backgroundColor = 'white';



document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        elemento.style.backgroundColor = 'purple';
    } else if (event.key === 'w') {
        elemento.style.backgroundColor = 'gray';
    } else if (event.key === 'e') {
        elemento.style.backgroundColor = 'brown';
    }
})