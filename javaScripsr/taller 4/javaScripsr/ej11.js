const numero1 = parseFloat(prompt("Ingrese un numero: "));
        const numero2 = parseFloat(prompt("Ingrese otro numero: "));

        const divnumero1 = document.getElementById("numero 1")
        divnumero1.innerText = `numero 1: ${numero1}`
        document.getElementById("numero 2").innerText=`numero 2: ${numero2}`
        //operaciones
        const suma = numero1 + numero2;
        document.getElementById("suma").innerHTML=`<b>Suma:</b> ${suma}`
        console.log(`La suma de ${numero1} + ${numero2} es ${suma}`)

        const resta = numero1 - numero2;
        console.log(`La resta da como resultado: ${resta}`);

        const multiplicacion = numero1 * numero2;
        console.log(`La multiplicacion da como resultado: ${multiplicacion}`);

        const divicion = Math.floor (numero1 / numero2);
        console.log(`La division da como resultado: ${divicion}`);

        const  exponente = numero1 ** numero2;
        console.log(`La  da como resultado: ${exponente.toFixed(4)}`);