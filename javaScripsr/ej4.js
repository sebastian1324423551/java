const prompt = require('prompt-sync')();
const n1 = parseInt(prompt("ingrese el numero 1: "));
const n2 = parseInt(prompt("ingrese el numero 2: "));
const n3 = parseInt(prompt("ingrese el numero 3: "));
const media = (n1 + n2 + n3) / 3;
console.log(`El resultado es: ${media}`);