//let elemento;

//elemento = document.getElementById('encabezado'); // asi accedemos a un elemto 
//elemento = document.getElementById('encabezado').innerText; 

//let encabezado ;
//encabezado = document.getElementById('encabezado'); //querySelector funciona igual solo que se recurre al elemento como si fuese un css o un jq con # si es id o . si es clase, y se puede seleccionar un elemento padre y uno hijo
//encabezado.style.background. = '#333';
//encabezado.style.color = '#ffff';
//encabezado.style.padding = '20px';

//encabezado.textContent = 'Cambio de prueba'
//encabezado.innerText = 'Cambio de prueba de otra forma'

//console.log(encabezado);

//seleccionar varios elementos

//let enlaces = document.getElementsByClassName('enlace')[3];

//enlaces.style.background = '#333';
//enlaces.textContent = 'Cambio de prueba';

//queryselectorall

//let enlaces = document.querySelectorAll('#principal .enlace'); //querySelector solo regresa un elemento y querySelectorAll regresa una lista de todos los que se encuentrn en ese id sekeccionado

//console.log(enlaces);



//TRAVERSING 

//ES RECORRER TODO EL DOCUMENTO de padre a hijo
//childNodes es el html en su totalidad de lo que se está seleccionando , los text simplemente son los espacios en blanco
//children shijos del selector
//nodeType te muetra que tipo de nodo es el que se esta recorriendo . 1 = html , 2 = atributos, 3 = texto , 8 = comentarios , 9 = documentos , 10 = doctype

//const navegación = document.querySelector('#principal');
//console.log(navegación.children);

//const cursos = document.querySelectorAll('.card');

//console.log(cursos[0].lastElementChild);
//console.log(cursos[0].firstElementChild);


//ES RECORRER TODO EL DOCUMENTO de hijo a padre

//const enlaces = document.querySelectorAll('.enlace');

//console.log(enlaces[0].parentElement);

//const cursos = document.querySelectorAll('.card');

//console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent  = 'Cambiando texto de hijo a padre');


//SIBBILING
//los sibbling son los que NO tienen mas elementos indexados

const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);
