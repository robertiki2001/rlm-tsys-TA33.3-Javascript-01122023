const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dividirParesImpares(array) {
    const pares = [];
    const impares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        } else {
            impares.push(array[i]);
        }
    }

    return [pares, impares];
}

const [pares, impares] = dividirParesImpares(numeros);

console.log("Array de pares:", pares);
console.log("Array de impares:", impares);
console.log("Arrays concatenados:", pares.concat(impares));
