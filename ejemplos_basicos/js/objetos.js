//crear un objeto 

const persona = {
    nombre: 'Juan',
    apellido: 'Romero',
    edad: 30,
    email: 'juanf.romerog@gmail.com',
    gustos: ['música','fotografía','comida'],
    ciudad: {
        lugar_de_nacimiento: 'Caracas',
        lugar_de_residencia: 'Bogotá'
    },
    nacimiento: function(){
    return new Date().getFullYear() - this.edad;
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

persona.gustos[3] = 'fútbol' ;
console.log(persona.gustos);
console.log(persona.gustos[2]);

console.log(persona.ciudad.lugar_de_nacimiento);

//otra forma de acceder a los elementos de un objeto

console.log(persona['ciudad']['lugar_de_residencia']); //1)elemento de objeto 2)elemento del objeto del objeto, si es que se tiene

//para acceder a una funcion del objeto de un objeto

console.log(persona.nacimiento());


//arreglo de objetos
const autos = [
    {modelo: 'mustang', 
    motor: 6.0 },
    {modelo: 'charger', 
    motor: 6.9 },
    {modelo: 'challenger', 
    motor: 12 },
];

for(let i = 0; i < autos.length; i++ ){
    console.log(autos[i].motor);
    console.log(`${autos[i].motor} ${autos[i].modelo}`);
}


//console.log(autos[2].modelo);