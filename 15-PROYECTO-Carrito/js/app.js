const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');


loadEventListeners();
function loadEventListeners(){
    //cuando se agrega un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click',agregarCurso);
}



//FUNCIONES
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log('agregando al carrito');
    }
}