function saludas(){
    console.log('hola');
}
saludas();

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar( 'Juan' );


function sumar(a,b){
    return a + b;
}

let suma;
suma = sumar(2,7);
console.log(suma);


//otra forma de hacer unaa funcion

const saludo = function(nombre = 'Visitante'){
    return `Hola ${nombre}`;
}

console.log(saludo());
console.log(saludo('Pedro'));


//ejemplo de función IIFE

(function(){
    console.log('ejemplo función iife');
})();

(function(variable){
    console.log(`Función Iife en ${variable}`);
})('JavaScript');



//metodos de propiedad, es cuando una funcion se pone dentro de un objeto

const generos = {
    musicales: function(gender){
        console.log(`Genero musical ${gender}`)
    },
    humanos: function(genero){
        console.log(`Genero humano ${genero}`)
    }
}

generos.musicales('jotopo');
generos.humanos('Femenino');