let votos = { "Candidato Uno": 0, "Candidato Dos": 0, "Candidato Tres": 0, "Blanco": 0 };
let votantes = 50;
let votaron = 0;
const claveCierre = "1234";

function mostrarMenu() {
    console.log("\nMENU ELECCIONES 2025");
    console.log("1. Candidato Uno");
    console.log("2. Candidato Dos");
    console.log("3. Candidato Tres");
    console.log("4. Blanco");
    console.log("5. Cerrar elecciones");
}

function registrarVoto(opcion) {
    if (votaron < votantes) {
        switch (opcion) {
            case "1": votos["Candidato Uno"]++; break;
            case "2": votos["Candidato Dos"]++; break;
            case "3": votos["Candidato Tres"]++; break;
            case "4": votos["Blanco"]++; break;
            default: console.log("Opción inválida"); return;
        }
        votaron++;
        console.log(`Voto registrado. Han votado ${votaron} de ${votantes} personas.`);
    } else {
        console.log("Ya votaron todas las personas aptas.");
    }
}

function cerrarElecciones(clave) {
    if (clave === claveCierre || votaron === votantes) {
        console.log("\nResultados:");
        console.log(`Número de personas que votaron: ${votaron}`);
        console.log("Número de votos por candidato:");
        for (let candidato in votos) {
            console.log(`${candidato}: ${votos[candidato]}`);
        }
    } else {
        console.log("Clave incorrecta o no se puede cerrar aún.");
    }
}


mostrarMenu();
registrarVoto("1"); 
registrarVoto("2"); 
cerrarElecciones("1234"); 