const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
let articulosCarrito = [];


loadEventListeners();
function loadEventListeners(){
    //cuando se agrega un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click',agregarCurso);
}



//FUNCIONES
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//leer el HTML del curso al que le dimos click
function leerDatosCurso(cursoCuerpo){
    // console.log(cursoCuerpo);
    const infoCurso = {
        imagen: cursoCuerpo.querySelector('img').src,
        titulo: cursoCuerpo.querySelector('h4').textContent,
        precio: cursoCuerpo.querySelector('.precio span').textContent,
        id: cursoCuerpo.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    // console.log(infoCurso);
    articulosCarrito = [...articulosCarrito, infoCurso];
    // console.log(articulosCarrito);
    carritoHTML();
}



//MUESTRA EL CARRITO DE COMPRAS EN EL HTML
function carritoHTML(){
    //limpiar HTML
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach((infoCurso)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${infoCurso.titulo}
            </td>
        `;
        //AGREGA EL HTML DEL CARRITO EN EL TBODY
        contenedorCarrito.appendChild(row);
    });
}

//ELIMINA CURSOS DEL html
function limpiarHTML(){
    //FORMA LENTA
    // contenedorCarrito.innerHTML = ``;

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}