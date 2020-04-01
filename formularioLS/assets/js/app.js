//variables
const ListaTweets = document.getElementById('lista-tweets');




//event listeners

// se coloca de esta forma para que no sean globales
eventListener();

function eventListener(){
    //paso 1
    //cuando se envía formulario
    document.getElementById('formulario').addEventListener('submit',agregarTweets );

    //paso 2
    //borrar tweets
    ListaTweets.addEventListener('click',borrarTweet);
    
    //paso 3
    //contnido cargado desde el dom
    //este es un event listener que carga cuando todo eld documento html ha finalizado su cargado

    document.addEventListener('DOMContentLoaded', localStorageListo);

}



//funciones

//añadir tweet del formulario

function agregarTweets(e) { //esta funcion ejecuta agregarTweetLocalStorage
    e.preventDefault();
    //console.log('formulario enviado');

    //leer valor text area
    const tweet = document.getElementById('tweet').value;

    //botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //crear elemento y añadir a la lista
    const li = document.createElement('li'); //creo elemento
    li.innerText = tweet; //con esto dibujo en el html
    ListaTweets.appendChild(li);//con esto agrego de borrar en la lista
    li.appendChild(botonBorrar);// boton de borrar a la lista

 //console.log(tweet);   


 //AÑADIR AL LOCAL STORAGE

 agregarTweetLocalStorage(tweet);//con esto mandamos el tweet al local strage

}

//eliminar tuit
function borrarTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {

        e.target.parentElement.remove();

        borrarTweetLocalStorage(e.target.parentElement.innerText);

        //console.log(e.target.parentElement.innerText)

       //console.log(e.target.parentElement.remove());
    }
    //console.log('click en borrar');
}

//MOSTRAR datos de local storage en la lista
function localStorageListo() {
    let tweets;
    
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweets){

        //botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //crear elemento y añadir a la lista
    const li = document.createElement('li'); //creo elemento
    li.innerText = tweets; //con esto dibujo en el html y es la variable tweets porque es la que dibuja directamente del local storage
    ListaTweets.appendChild(li);//con esto agrego de borrar en la lista
    li.appendChild(botonBorrar);// boton de borrar a la lista
    })
    //console.log(tweets);
}


//agregar en local storage
function agregarTweetLocalStorage(tweet) { //esta función se ejecuta cuando se agrega un nuevo tweet y se obtiene todo lo que esta guardad en la variable
    let tweets;

    // con esto leemos los tweets
    tweets = obtenerTweetsLocalStorage(); 
    //con esto añadimos nuevo tweet en el local storage
    tweets.push(tweet);
    //
    localStorage.setItem('tweets', JSON.stringify(tweets));

}




//con esta funcion revisamos cuantos tweets esten registrados en local storage
// y si está vacio se llena el arreglo que estamos generando
//comprueba que el local storage tenga elementos y retorna un arreglo

function obtenerTweetsLocalStorage() { // y con esto hago validaciones según lo que se obtenga
    let tweets;
    //valores local storage
    if(localStorage.getItem('tweets') === null){
        tweets =[];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets')); // con esto revisamos si hay tweets guardados // se está guardando como un Json
    }
    return tweets;
}

//BORRAR TWEET DE LOCAL STORAGE

function borrarTweetLocalStorage(tweet){
    let tweets; //tweets porque se usará de nuevo la función que revisa el local storage
    let tweetBorrar;


    //se elmimina la x
    tweetBorrar = tweet.substring(0,tweet.length-1) // con esto seleccionamos TODO y que corte la última palabra

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet , index){
       // console.log(tweets , index); //mostramos la cantidad de tweets 
       if (tweetBorrar === tweet) { //si el tweet qu quiero borrar es igual al tweet actual que está en recorriendo el foreach
            tweets.splice(index,1); // splice toma la posición del arreglo queremos eliminar y que tan lejos se quiere ir en la eliminación
       }
    })

    localStorage.setItem('tweets', JSON.stringify(tweets));
}