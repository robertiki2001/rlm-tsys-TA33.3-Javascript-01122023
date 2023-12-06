class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
        this.nombre = nombre;
        this.tiempoPreparacion = tiempoPreparacion;
        this.ingredientes = ingredientes;
    }
}

const tartaManzana = new Receta("Tarta de Manzana", "1 hora", ["manzanas", "azúcar", "harina", "canela", "huevos", "levadura"]);
const galletasAvena = new Receta("Galletas de Avena", "30 minutos", ["avena", "azúcar", "harina", "mantequilla", "huevo", "esencia de vainilla"]);
const ensaladaCesar = new Receta("Ensalada César", "15 minutos", ["lechuga", "pollo", "queso parmesano", "croutones", "salsa César"]);

const recetas = [tartaManzana, galletasAvena, ensaladaCesar];

function mostrarReceta(receta) {
    console.log(`Receta: ${receta.nombre}`);
    console.log(`Tiempo de preparación: ${receta.tiempoPreparacion}`);
    console.log("Ingredientes:");

    receta.ingredientes.forEach(ingrediente => {
        console.log(`- ${ingrediente}`);
    });

    console.log("\n"); 
}

recetas.forEach(mostrarReceta);
