const miArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function obtenerLongitudArray(array) {
    console.log(`La longitud del array es: ${array.length}`);
}

function obtenerElementoAleatorio(array) {
    const elementoAleatorio = array[Math.floor(Math.random() * array.length)];
    console.log(`Elemento aleatorio del array: ${elementoAleatorio}`);
}



obtenerLongitudArray(miArray);
obtenerElementoAleatorio(miArray);
