function crearContraseña(){
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const especiales = '@#$%&()=?¿*+[]{}';
    
    function obtenerRandom(conjunto, cantidad){
        let resultado = '';
        for (let i = 0; i < cantidad; i++){
            resultado += conjunto[Math.floor(Math.random() * conjunto.length)];
            
        }
        return resultado
        
    }
    
    const parte1 = obtenerRandom(mayusculas, 2);
    const parte2 = obtenerRandom(minusculas, 2);
    const parte3 = obtenerRandom(numeros, 2);
    const parte4 = obtenerRandom(especiales, 2);

    const partes = [parte1, parte2,parte3, parte4];

    const contraseñaMezclada = partes
     .join('')       // Une las partes: "ABcd12@#"
     .split('')      // Convierte a array: ["A","B","c","d","1","2","@","#"] Propósito: Dividir el string de entrada en partes separadas
     .sort(() => Math.random() - 0.5) // Mezcla el array
     .join('');     // Vuelve a string: Ejemplo: "c2A@1B#d"
    return contraseñaMezclada;
    
}
const miContraseña = crearContraseña();
console.log('Contraseña generada:', miContraseña);