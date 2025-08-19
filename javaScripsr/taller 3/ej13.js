const prompt = require('prompt-sync')();
function crearAlumno() {
    const nombre = prompt("Ingrese el nombre del alumno:");
    let notas = [];
    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} (de 1 a 5):`));
        while (isNaN(nota) || nota < 1 || nota > 5) {
            nota = parseFloat(prompt("Nota inválida. Ingrese una nota entre 1 y 5:"));
        }
        notas.push(nota);
    }
    return {
        nombre: nombre,
        notas: notas,
        promedio: function() {
            const suma = notas.reduce((a, b) => a + b, 0);
            return suma / notas.length;
        }
    };
}


const alumno1 = crearAlumno();
console.log(alumno1.nombre);
console.log(alumno1.notas);
console.log(alumno1.promedio());