//VARIABLES
const formulario = document.querySelector('#formulario');
const listTweets = document.querySelector('#lista-tweets');
let tweets = [];

//EVENT LISTENERS
eventListeners();
function eventListeners(){
    formulario.addEventListener('submit',agregarTweet);
}

//FUNCIONES
function agregarTweet(e){
    e.preventDefault();
    console.log('Agregando Tweet');
}