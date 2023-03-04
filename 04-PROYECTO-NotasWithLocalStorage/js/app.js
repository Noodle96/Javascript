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
    const objTweet = {
        id: Date.now(),
        tweet: tweet,
    }
    tweets = [...tweets, objTweet];
    formulario.reset();

    //mostrar tweet en el HTML
    mostrarTweetHTML();

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

function mostrarTweetHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach((tweet)=>{
            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            listTweets.appendChild(li);
        });
    }
}
function limpiarHTML(){
    while (listTweets.firstChild) {
        listTweets.removeChild(listTweets.firstChild);
    }
}