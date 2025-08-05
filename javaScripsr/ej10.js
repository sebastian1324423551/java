const prompt = require('prompt-sync')();


const Par = (numero) => numero % 2 === 0;

const numero = parseInt(prompt('Ingrese un número entero: '));


console.log(`¿El número ${numero} es par? ${Par(numero)}`);