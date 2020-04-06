//VARIABLE

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCurso = document.querySelector('#lista-carrito tbody'); //se usa querySelector porque se va ausar la sintaxis de seleccionar el table con lista carrito y por eso query selector es mejor opcion
const vaciarBtn = document.getElementById('vaciar-carrito');




//listeners

cargarEventListeners();


function cargarEventListeners(){
    //Dispara cuando se presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina curso de carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrito
    vaciarBtn.addEventListener('click', vaciarCarrito);

    //cargar documentos guardados en local storage

    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}





//funciones

//funcion que añáde curso a carrito
function comprarCurso(e) {

    e.preventDefault();

    //delegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')){ //como es una lista de clase se usa .contains('nombre de clase que se necesita usar')
         const curso = e.target.parentElement.parentElement; //se usa dos veces parentElement para poder acceder a la tarjeta completamente

         //enviamos curso seleccionado
         leerDatosCurso(curso); // se le pasa curso para que todo lo que esté disponible en esta función de comprar cursos este disponible en la función a la que se está mandando la info
        //console.log(curso);
    }
    //console.log(e.target.classList);
}


//leer los datos del curso

function leerDatosCurso(curso) {

    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'), //de esta forma accedemos al id mucho mas facil
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        imagen: curso.querySelector('img').src,
    }

    insertarCarrito(infoCurso);

   //console.log(infoCurso);
}


//mostrar el curso seleccionado en el carrito

function insertarCarrito(curso){
    const row = document.createElement('tr'); //con esto creamos el elemento

     /*con esto pintamos el elemento*/
    row.innerHTML = `
    <td>
        <img src="${curso.imagen}" width=100/>
    </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
    </td>
    `;

    listaCurso.appendChild(row); //con esto agregamos en el html

    guardarcursoLocalStorage(curso); //para empezar a pasar la información a local storage


//console.log(infoCurso);
}


//función para eliminar un solo curso
function eliminarCurso(e){
    e.preventDefault();

    let curso;//para saber que curso se esta eliminando
    let cursoId;

    if(e.target.classList.contains('borrar-curso')){

        e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement.parentElement);
        //borrarCarritoLocalStorage(e.target.parentElement.parentElement);
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id'); // para tomar el id uso querty selector porque con el selecciono el tag de enlace y tomo su atributo que se encuentra en el enlace que en eset casi sería data-id
       //console.log(e.target.parentElement.parentElement);
        //console.log(cursoId);
    }

    borrarCarritoLocalStorage(cursoId);
}

//Eliminar los cursos del carrito en el dom
function vaciarCarrito(){
   //forma de eliminar elementos del carrito 1
    //listaCurso.innerHTML= '';
    //return false;

    //forma de eliminar elementos del carrito 2
    while(listaCurso.firstChild){
        listaCurso.removeChild(listaCurso.firstChild);
    }
}



//almacena curso en local storage

    
function guardarcursoLocalStorage(curso){
    let cursos;
 
    //Toma el valor de un arreglo con datos de LS o vacio
    cursos = cursosLocalStorate();
 
    //El curso seleccionado se agrega al arreglo
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos)); //con esta linea pasamos arreglo
 
}


//con esto compruebo si local storage tiene o no información
function cursosLocalStorate(){
    let cursosLS;

    //para ver si localstorage está vacio
    if(localStorage.getItem('cursos') === null ){
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    //console.log(cursosLS);
    return cursosLS;
}

//imprimir local storage en el carrito

function leerLocalStorage(){
    let cursosLS;

    cursosLS = cursosLocalStorate();

    cursosLS.forEach(function(curso) {
        //construir el template

            const row = document.createElement('tr'); //con esto creamos el elemento

     /*con esto pintamos el elemento*/
    row.innerHTML = `
    <td>
        <img src="${curso.imagen}" width=100/>
    </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
    </td>
    `;
    listaCurso.appendChild(row); //con esto agregamos en el html
    });
   // console.log(cursosLS);
}


//eliminar
function borrarCarritoLocalStorage(curso){
    let cursosLS;
    //console.log(curso);

    cursosLS.forEach(function(curso){
        console.log(curso);

    })


 

}