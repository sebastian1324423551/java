const prompt = require('prompt-sync')();

const edad = parseInt(prompt("Ingrese su edad: "))
const cedula = prompt("Responda si o no tiene cedula: ").toLowerCase() === 's';
const inscripcion = prompt("Responda si o no tiene inscrita su cedula: ").toLowerCase() === 's';

const cumpleEdad = edad >= 18;
const puedeVotar = cumpleEdad && cedula && inscripcion

if (puedeVotar) {
    console.log("USTED PUEDE VOTAR en las elecciones.");
} else {
    console.log("USTED NO PUEDE VOTAR en las elecciones.");
    
   
    if (!cumpleEdad) {
        console.log("Motivo: No cumple con la edad mínima requerida (18 años).");
    }
    if (!cedula) {
        console.log("Motivo: No tiene cédula de identidad.");
    }
    if (!inscripcion) {
        console.log("Motivo: Su cédula no está inscrita para votar.");
    }
}