const planetasSistemaSolar = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

function listarPlanetas(planetas) {
    console.log("Nombres de los planetas del Sistema Solar:");

    for (let i = 0; i < planetas.length; i++) {
        console.log(planetas[i]);
    }
}

listarPlanetas(planetasSistemaSolar);
