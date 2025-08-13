let persona = {
    Nombre: "Carlos",
    edad: 30,
    profesion: "ingeniero"
}

console.log(typeof(persona))
console.log(persona)

persona.correo="persona.com"
console.log(persona)

persona.edad=35
console.log(persona)

console.log(Object.values(persona))
console.log(persona.edad)


function saludar(Nombre){
    return `Hola ${Nombre}`
}


saludar("Maria")
console.log(saludar("Maria"))


const despedir =  function(nombre){
    console.log(`Àdios ${nombre}`)
}
despedir("Miguel")

//funcion flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(59, 5)); // 29.5 ✅

const mesaje = ()=>{
    let saludo = "hola a todos"
    console.log(saludo)
}

mesaje()