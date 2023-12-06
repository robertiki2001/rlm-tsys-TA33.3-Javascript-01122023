const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

function encontrarElementosRepetidos(array1, array2) {
    const elementosRepetidos = [];

    for (const elemento1 of array1) {
        if (array2.includes(elemento1) && !elementosRepetidos.includes(elemento1)) {
            elementosRepetidos.push(elemento1);
        }
    }

    return elementosRepetidos;
}

const elementosRepetidos = encontrarElementosRepetidos(javascript1, javascript2);

if (elementosRepetidos.length > 0) {
    console.log("Elementos Repetidos:", elementosRepetidos);
} else {
    console.log("No hay elementos repetidos.");
}
