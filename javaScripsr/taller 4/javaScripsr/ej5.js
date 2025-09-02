const prompt =  require("prompt-sync")();
const k_recorridos = parseFloat(prompt("Ingrese los kilometros recorridos: "));
const l_consumidos = parseFloat(prompt("Ingrese los litros consumidos: "));

const consumo = k_recorridos/l_consumidos;
console.log(`Èl consumo de combustible por kilometro es ${consumo.toFixed(4)} L/km`);