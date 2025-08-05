const prompt = require('prompt-sync')();

let a = parseInt(prompt("ingrese el valor de a: "));
let b = parseInt(prompt("ingrese el valor de b: "));

console.log(`Valores iniciales: ${a} ${b}`)

let temp = a;
a = b;
b = temp;

console.log(`Valores intercambiados: a = ${a}, b = ${b}`);
