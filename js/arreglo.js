// crear arreglo

const numeros = [10,20,30,40,50];
//console.log(numeros);

//arreglo mix
const mix = ['Hola',20,true,null,undefined];
//console.log(mix);

//arreglo de strings



const meses = new Array('enero','febrero','marzo','abril'); //esta es otra forma de crear un arreglo;
console.log(meses);
console.log(meses.length);
//para saber si un arreglo es un arreglo
console.log(Array.isArray(meses));

//acceder a un elemento de una arreglo
console.log(meses[3]);

//insertar elemento en un arreglo
meses[4] = 'mayo';

//otra forma de insertar sin necesidad de colocar el sitio donde se necesita
meses.push('junio');
console.log(meses);

//para saber posición de elemento en un arreglo 
console.log(meses.indexOf('abril'));

//para agregar en el inicio del arreglo
meses.unshift('Mes 0');
console.log(meses);

//eliminar un elemento de un arreglo
//último
meses.pop();
console.log(meses);

//primero
meses.shift();
console.log(meses);

//elemento intermedio
meses.splice(0,2) //toma dos parametros, el primero es que posicion quiero quitar y el segundo es que tan lejos se quiere ir
console.log(meses)

//cambiar orden del arreglo

meses.reverse();
console.log(meses)
//unir arreglos

let arreglo1 = [1,2,3];
    arreglo2 = [7,8,9];

console.log(arreglo1.concat(arreglo2));


//como ordenar un arreglo

//letras
let arreglo3 = ['h','j','e','a','w','v','b','y','z'];
arreglo3.sort();
console.log(arreglo3);

//números

let arreglo4 = [9,3,4,1,33,0,6,200,90,55,11];

arreglo4.sort(function(x,y){ //de esta forma es ascendente, si se resta y-x es descendente
    return x-y;
});
console.log(arreglo4);

//el arreglo completo no puede ser reasignado, pero los valores individuales si
const arreglo5 = [1,3,4];
arreglo5[1] =  2;
arreglo5[2] = 3;
console.log(arreglo5);