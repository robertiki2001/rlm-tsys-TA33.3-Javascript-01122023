const receta = {
    nombre: "Tarta de Manzana",
    tiempoPreparacion: "1 hora",
    ingredientes: ["manzanas", "azúcar", "harina", "canela", "huevos", "levadura"]
};

function mostrarReceta(receta) {
    console.log(`Receta: ${receta.nombre}`);
    console.log(`Tiempo de preparación: ${receta.tiempoPreparacion}`);
    console.log("Ingredientes:");

    receta.ingredientes.forEach(ingrediente => {
        console.log(`- ${ingrediente}`);
    });
}

mostrarReceta(receta);
