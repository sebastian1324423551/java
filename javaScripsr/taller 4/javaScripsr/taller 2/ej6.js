const prompt = require('prompt-sync')();


const salario = parseFloat(prompt("Ingrese su salario mensual en pesos colombianos: "));


    let tasaImpuesto;
    
    // Usamos true como expresión para el switch
    switch(true) {
        case (salario < 1000000):
            tasaImpuesto = 0.01; // 1%
            break;
        case (salario >= 1000000 && salario < 2000000):
            tasaImpuesto = 0.03; // 3%
            break;
        case (salario >= 2000000 && salario < 4000000):
            tasaImpuesto = 0.05; // 5%
            break;
        case (salario >= 4000000 && salario < 10000000):
            tasaImpuesto = 0.07; // 7%
            break;
        default:
            tasaImpuesto = 0.10; // 10%
    }

    const impuesto = salario * tasaImpuesto;
    console.log(`Impuesto a pagar: $${impuesto}`);
   
