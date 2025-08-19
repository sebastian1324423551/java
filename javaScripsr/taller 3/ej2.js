const prompt = require('prompt-sync')();

function contarVocales() {
    const texto = prompt("Ingrese un texto: ");
    
  

    const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    
    console.log(`El texto tiene ${contador} vocales.`);
    return contador;
}

contarVocales();
