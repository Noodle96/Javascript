//02- ACCEDER A ELEMENTOS DEL HTML CON DOCUMENTO
let elemento;
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4];

elemento = document.images;
elemento = document.scripts;
// console.log(elemen to);


//03- SELECCIONAR ELEMENTOS POR SU CLASE
const header = document.getElementsByClassName('header'); 
console.log(header);//[header.header.contenedor]

const algo = document.getElementsByClassName('algo');
console.log(algo); //[]


//04-getElementById
console.log('04--');
const formulario = document.getElementById('formulario');
console.log(formulario);

const noExiste = document.getElementById('noExiste');
console.log(noExiste); //null

//005- querySelector
const card = document.querySelector('.card');
console.log(card);
//selectores especificos con en css
const info = document.querySelector('.premium .info');
console.log(info);
//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

const formulario2 = document.querySelector('.contenido-hero #formulario');
console.log(formulario2);
//seleccionar elemento HTML
const navegacion = document.querySelector('nav');
console.log(navegacion );

//006- querySelectorAll
const cards_varios = document.querySelectorAll('.card');
console.log(cards_varios);



//007- MODIFICAR TEXTOS O IMAGENES CON JS
console.log('07--- ');
const textHeading = 'Welcome Russell Page';
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);
// document.querySelector('.contenido-hero h1').textContent = textHeading;  

// console.log(encabezado.innerText); // si en el css esta como visibility no lo encuentra
// console.log(encabezado.textContent); // si lo vamos a encontrar
// console.log(encabezado.innerHTML); //se trae el html

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);

//007- CAMBIANDO EL CSS CON JAVASCRIPT
const encabezadoH1 = document.querySelector('h1');
console.log(encabezadoH1);
// encabezadoH1.style.backgroundColor = 'red';
// encabezadoH1.style.fontFamily = 'Arial';
// encabezadoH1.style.textTransform = 'uppercase';
const card2 = document.querySelector('.card');
card2.classList.add('firstClass','segundaClase');
// card2.classList.remove('card');
console.log(card2);


//008- TRAVERSING THE DOM
console.log('008--- ');
const navegacion2 = document.querySelector('.navegacion');
console.log(navegacion2);
console.log(navegacion2.childNodes);
console.log(navegacion2.children);
console.log(navegacion2.children[0].nodeName);
console.log(navegacion2.children[0].nodeType);
console.log('firstElementChild');
console.log(navegacion2.firstElementChild);
console.log(navegacion2.lastElementChild);

const card3 = document.querySelector('.card');
console.log(card3);
card3.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';
console.log(card3.children[1].children[1].textContent);

//del hijo al padre
console.log(card3.parentElement.parentElement.parentElement);

//entre hermanos
console.log(card3);
console.log(card3.nextElementSibling);
console.log(card3.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);


//009-ELIMINAR ELEMENTOS DEL DOM
console.log('009---');
const primerEnlace = document.querySelector('a')
console.log(primerEnlace);
// primerEnlace.remove();

const navegacion4 = document.querySelector('.navegacion');
console.log(navegacion4.children);
navegacion4.removeChild(navegacion4.children[2]);

//10-GENERAR HTML CON JAVASCRIPT
console.log('10---');
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo enlace';
enlace.href='/nuevoEnlace';
enlace.target = '_blank';
enlace.setAttribute('ss','dd');
enlace.classList.add('nueva-clase');
enlace.onclick = miFunction;
// navegacion4.appendChild(enlace); // le agrega al final
navegacion4.insertBefore(enlace,navegacion4.children[1]);
console.log(enlace);

function miFunction(){
    alert('Diste Click');
}

//creando un card de forma dinamica
console.log('Creando un card de forma dinamica');
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');
console.log(parrafo1);


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Gorilaz';
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1050 por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);

//crear div con la clase info
const infoDiv = document.createElement('div');
infoDiv.classList.add('info');

//agregando parrafos dentro de info
infoDiv.appendChild(parrafo1);
infoDiv.appendChild(parrafo2);
infoDiv.appendChild(parrafo3);
console.log(infoDiv);
//creando la imagen del card
const imagenNueva = document.createElement('img');
imagenNueva.src = 'img/hacer2.jpg';
imagenNueva.classList.add('img-fluid');// responsive
imagenNueva.alt = 'imagenTemplate';
console.log(imagenNueva);
//creando el div card(padre)
const cardPadre = document.createElement('div');
cardPadre.classList.add('card');
cardPadre.appendChild(imagenNueva);
cardPadre.appendChild(infoDiv);
console.log(cardPadre);


//agregando cardPadre al div contenedor-cards
const contenedorCards = document.querySelector('.contenedor-cards');
contenedorCards.appendChild(cardPadre);
console.log(contenedorCards);
