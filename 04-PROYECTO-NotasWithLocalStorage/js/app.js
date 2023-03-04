//VARIABLES
const formulario = document.querySelector('#formulario');
const listTweets = document.querySelector('#lista-tweets');
let tweets = [];

//EVENT LISTENERS
eventListeners();
function eventListeners(){
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);

    // Cuando el documento esta listo INIT
    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        mostrarTweetHTML();
        // console.log(tweets);
    });
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
            const btnEliminar = document.createElement('a');
            btnEliminar.innerText = 'X';
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            listTweets.appendChild(li);
        });
    }
    sincronizarLocalStorage();
}
function sincronizarLocalStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
function limpiarHTML(){
    while (listTweets.firstChild) {
        listTweets.removeChild(listTweets.firstChild);
    }
}

//BORRAR UN TWEET tTMB LOCALSTORAGE
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    console.log(tweets);
    mostrarTweetHTML();
}