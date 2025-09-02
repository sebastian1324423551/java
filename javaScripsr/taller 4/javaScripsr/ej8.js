const prompt = require('prompt-sync')();


const PAPA_POR_PERSONA = 200; 
const HUEVOS_POR_KILO_PAPA = 5;
const CEBOLLA_POR_KILO_PAPA = 300; 


const personas = parseInt(prompt('Ingrese el número de personas: '));


const papasGramos = personas * PAPA_POR_PERSONA;
const papasKilos = papasGramos / 1000;
const huevos = papasKilos * HUEVOS_POR_KILO_PAPA;
const cebollaGramos = papasKilos * CEBOLLA_POR_KILO_PAPA;

console.log(`Para ${personas} personas necesitas:`);
console.log(`Papas: ${papasGramos}g (${papasKilos.toFixed(2)} kg)`);
console.log(`Huevos: ${Math.ceil(huevos)} unidades`);
console.log(`Cebolla: ${cebollaGramos}g (${(cebollaGramos/1000).toFixed(2)} kg)`);