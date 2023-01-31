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