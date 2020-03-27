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


// Convertir strings en números

const numero4 = '50';
      numero5 = 10;
      numero6 = 'tres';
      numero7 = '70';
      numero8 = '50.99';
      numero9 = 10000.123456789;

      //parseFloat para números flotantes
      //parseInt para números enteros

      console.log(numero4 + numero5)
      console.log(parseInt(numero5) + numero5)
      console.log(numero4 - numero5)
      console.log(parseInt( numero6 ))
      console.log(Number(numero7));
      console.log(parseFloat(numero8))


// Tofix solo aplica a números
    console.log(numero9.toFixed(2));



    // convertir de número a string

    let cadenax = 50;
    nombre = String(cadenax);

    console.log(typeof nombre)
