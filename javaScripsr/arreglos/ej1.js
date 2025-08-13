//arreglos
let frutas = ["manzana","pera","kiwi"]

console.log(frutas[0]) // manzana

console.log(frutas.length) // 3

frutas.push("banano")
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.unshift("banano")
console.log(frutas)

for (fruta in frutas){
    console.log(fruta)

}
frutas.forEach(fruta => {
    console.log(fruta)
});

let numeros = []
numeros.push(5)
numeros.push(7)
numeros.unshift(20)
console.log(numeros)
numeros.push(44)
console.log(numeros)

for (let i=0; i<numeros.length;i++){
    console.log(`numero ${numeros[i]} en la posicion ${i}`)
}

numeros.forEach((numero,i)=>{
    console.log(`numero ${numero} en la posicion ${i}`)
})

let valores = [5,6,7,8,9,3]
let cuadrados = valores.map(x=>x*x)
console.log(cuadrados)

let resultado = valores.filter(x=>x>5)
console.log(resultado)