const prompt = require('prompt-sync')();

const x = parseFloat(prompt("Ingrese el valor del lado: "));
const area = x * x;  
const perimetro = 4 * x;

console.log(`  Area: ${area} cm²`); 
console.log(`  Perimetro: ${perimetro} cm`);