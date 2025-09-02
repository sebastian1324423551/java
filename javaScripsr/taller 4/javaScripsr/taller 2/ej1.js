const prompt = require('prompt-sync')();

    // Pedir el número al usuario mediante prompt
const input = prompt("Por favor, ingresa un número para determinar si es par o impar:");
const numero = parseInt(input);
    
    // Validar que sea un número válido
if (isNaN(numero)) {
        console.log('Error: Por favor, ingresa un número válido.');
        return;
}
    
    // Determinar si es par o impar y mostrar resultado en consola
if (numero % 2 === 0) {
        console.log(`El número ${numero} es PAR.`);
} else {
        console.log(`El número ${numero} es IMPAR.`);
}
