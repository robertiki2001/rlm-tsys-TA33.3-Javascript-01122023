function invertirArray(array) {
    return array.slice().reverse();
}

function invertirCadena() {
    const cadenaOriginal = prompt("Introduce una cadena:");

    const arrayOriginal = Array.from(cadenaOriginal);

    const arrayInvertido = invertirArray(arrayOriginal);

    const cadenaInvertida = arrayInvertido.join("");

    console.log(`Cadena Original: ${cadenaOriginal}`);
    console.log(`Array Original: ${arrayOriginal}`);
    console.log(`Cadena Invertida: ${cadenaInvertida}`);
    console.log(`Array Invertido: ${arrayInvertido}`);

}

invertirCadena();
