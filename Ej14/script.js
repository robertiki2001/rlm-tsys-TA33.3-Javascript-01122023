const recetas = [
    {
        nombre: "Tarta de Manzana",
        tiempoPreparacion: "1 hora",
        ingredientes: ["manzanas", "azúcar", "harina", "canela", "huevos", "levadura"]
    },
    {
        nombre: "Galletas de Avena",
        tiempoPreparacion: "30 minutos",
        ingredientes: ["avena", "azúcar", "harina", "mantequilla", "huevo", "esencia de vainilla"]
    },
    {
        nombre: "Ensalada César",
        tiempoPreparacion: "15 minutos",
        ingredientes: ["lechuga", "pollo", "queso parmesano", "croutones", "salsa César"]
    }
];

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
