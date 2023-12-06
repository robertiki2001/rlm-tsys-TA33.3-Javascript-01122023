const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Ciudad A" },
    { nombre: "María", edad: 30, ciudad: "Ciudad B" },
    { nombre: "Carlos", edad: 28, ciudad: "Ciudad C" }
];

function mostrarPropiedadParaTodos(objetos, propiedad) {
    objetos.forEach(objeto => {
        console.log(`${objeto.nombre}'s ${propiedad}: ${objeto[propiedad]}`);
    });
}

mostrarPropiedadParaTodos(personas, "edad");
