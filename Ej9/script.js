function llegadaCompetidores() {
    return ["Juan", "María", "Carlos", "Laura", "Pedro"];
}

const llegada = llegadaCompetidores();

const [ganador, segundo, ...restoCompetidores] = llegada;

console.log("Ganador:", ganador);
console.log("Segundo:", segundo);
console.log("Resto de Competidores:", restoCompetidores);
