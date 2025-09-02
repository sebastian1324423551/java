// Ejemplo de código con prompt-sync
const prompt = require('prompt-sync')(); // Importa el paquete

const precio = parseFloat(prompt("Ingrese el precio del producto: "));
const iva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));
const total = precio + (precio * iva / 100);

console.log(`\nTotal a pagar: $${total.toFixed(2)}`);