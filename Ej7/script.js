const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];

function intercalarArrays(array1, array2) {
    const nuevoArray = [];

    for (let i = 0; i < array1.length; i++) {
        nuevoArray.push(array1[i]);
        nuevoArray.push(array2[i]);
    }

    array1.length = 0;
    array2.length = 0;

    return nuevoArray;
}

function mostrarMayoresQueCinco(array) {
    const mayoresQueCinco = array.filter(numero => numero > 5);
    console.log("Números mayores que 5:", mayoresQueCinco);
}

const resultado = intercalarArrays(arrayUno, arrayDos);
console.log("Array Resultante:", resultado);

mostrarMayoresQueCinco(resultado);
