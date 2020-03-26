//TIPOS DE VARIABLE

let letras = 'Juan';
let booleano;
const numero = 23;
booleano = false;

let simbolo = Symbol('simbolo');
let arreglo = [0,1,2]
let objeto ={
    nombre: 'Juan',
    apellido: 'Romero'
}

let fecha = new Date();

console.log (typeof letras  )
console.log (typeof  numero )
console.log (typeof booleano )
console.log (typeof  simbolo )
console.log (arreglo )
console.log (objeto )
console.log (fecha )


// OPERADORES DE COMPARACION

const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

console.log(numero1 > numero2)
console.log(numero2 > numero1)
console.log(numero1 > numero3)

console.log(numero1 == numero3) // compara valor sin ver tipo de dato
console.log(numero1 === numero3)// compara valor viendo el tipo de dato