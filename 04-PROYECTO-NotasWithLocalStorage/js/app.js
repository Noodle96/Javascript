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
    //TEXT AREA DONDE EL USUARIO ESCRIBE
    const tweet = document.querySelector('#tweet').value.trim();
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }
    console.log('enviando tweet');

}

function mostrarError(msg){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = msg;
    mensajeError.classList.add('error');
    //insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}