const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

function manipularArray(array) {
    const indexDOM = array.indexOf("DOM");
    if (indexDOM !== -1) {
        array.splice(indexDOM, 1);
    }

    const indexBOM = array.indexOf("BOM");
    if (indexBOM !== -1) {
        array.splice(indexBOM + 1, 0, "Objetos");
    }

    const indexArrays = array.indexOf("Arrays");
    if (indexArrays !== -1) {
        array.splice(indexArrays, 1);
    }

    const indexFunciones = array.indexOf("Funciones");
    if (indexFunciones !== -1) {
        array.splice(indexFunciones + 1, 0, "ArraysDifíciles");
    }

    const copiaUltimosDos = array.slice(-2);

    const indexFuncionesDespues = array.indexOf("Funciones");

    console.log("Array resultante:", array);
    console.log("Copia de los últimos dos elementos:", copiaUltimosDos);
    console.log("Índice de 'Funciones' después de las operaciones:", indexFuncionesDespues);
}

manipularArray(javascript1);
