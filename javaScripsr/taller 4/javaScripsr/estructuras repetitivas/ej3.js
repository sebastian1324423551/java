const prompt = require('prompt-sync')();

function menu() {
    let opcion = 0;
    do {
        console.clear();
        console.log("MENÚ DE OPCIONES");
        console.log("1. Área del Círculo");
        console.log("2. Adivinar Número entre 1 y 100");
        console.log("3. Salir");
        console.log("");
        opcion = parseInt(prompt("Ingrese Opción: "));
        switch(opcion) {
            case 1:
                AreaCirculo();
                console.log("Opción 1");
                break;
            case 2:
                Adivinar();
                console.log("Opción 2");
                break;
            case 3:
                console.log("Saliendo del programa...");
                break;
        }
        prompt("Presione Enter para continuar...");
    } while(opcion != 3);
}



function AreaCirculo() {
    const radio = parseFloat(prompt("Ingrese el radio del círculo: "));
    const area = Math.PI * (radio * radio);
    console.log(`El área del círculo con radio ${radio} es: ${area.toFixed(2)}`); // <<- ¡Revisa esto!
}
menu();