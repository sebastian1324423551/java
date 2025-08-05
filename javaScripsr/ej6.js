const prompt = require("prompt-sync")();

const horas = parseInt(prompt("Ingrese el numero de horas: "));
const minutos = parseInt(prompt("Ingrese el numero de minutos: "));
const segundos = (horas * 60 * 60) + (minutos * 60);

console.log(`El resultado es: ${segundos}s`);