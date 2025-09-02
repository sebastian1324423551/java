const prompt = require('prompt-sync')();

// Solicitar número de dos dígitos
const numero = parseInt(prompt('Ingrese un número de dos dígitos (10-99): '));

// Validar que sea número de dos dígitos
if (numero < 10 || numero > 99) {
  console.log('Error: Debe ingresar un número de exactamente dos dígitos.');
} else {
  // Calcular decenas y unidades usando aritmética
  const decenas = Math.floor(numero / 10);
  const unidades = numero % 10;

  // Mostrar resultado
  console.log(`Número: ${numero}:`);
  console.log(`- Decenas: ${decenas}`);
  console.log(`- Unidades: ${unidades}`);
}