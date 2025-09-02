const prompt = require('prompt-sync')();
const filas = parseInt(prompt("Ingrese el número de filas para el patrón (1-10): "));

if (filas >= 1 && filas <= 10) {
    console.log("\nPatrón de asteriscos:");
    for (let i = 1; i <= filas; i++) {
        console.log('* '.repeat(i).trim());
    }
} else {
    console.log("Por favor ingrese un número entre 1 y 10");
}

