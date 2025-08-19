const prompt = require('prompt-sync')();

function contarPares() {
    // 1. Capturar entrada del usuario
    const input = prompt("Ingrese números: ");
    
    // 2. Convertir a array de números
    const numeros = input.split('')
                       .map(num => parseFloat(num))
                       .filter(num => !isNaN(num)); // Solo números válidos
    
    // 3. Contar números pares
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contador++;
        }
    }
    
    // 4. Mostrar resultado
    console.log(`Cantidad de números pares: ${contador}`);
    return contador;
}

// Llamar a la función
contarPares();