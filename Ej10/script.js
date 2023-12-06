const persona = {
    nombre: "Juan",
    apellidos: "Pérez Gómez",
    edad: 30,
    direccion: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    pais: "País Ejemplo"
};

function obtenerNombreCompleto(persona) {
    return `${persona.nombre} ${persona.apellidos}`;
}

console.log("Nombre Completo:", obtenerNombreCompleto(persona));
