const prompt = require('prompt-sync')();

function gestorProductos() {
    const productos = new Map();
    const historial = [];
    
    while (true) {
        console.log("\n1. Agregar producto");
        console.log("2. Ver productos únicos");
        console.log("3. Ver precios");
        console.log("4. Ver historial");
        console.log("5. Salir");
        
        const opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case '1':
                const nombre = prompt("Nombre del producto: ");
                const precio = parseFloat(prompt("Precio: "));
                productos.set(nombre, precio);
                historial.push(nombre);
                break;
                
            case '2':
                console.log("Productos únicos:", new Set([...productos.keys()]));
                break;
                
            case '3':
                console.log("Precios:", productos);
                break;
                
            case '4':
                console.log("Historial:", historial);
                break;
                
            case '5':
                return;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
}

gestorProductos();