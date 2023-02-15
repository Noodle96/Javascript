const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
let articulosCarrito = [];


loadEventListeners();
function loadEventListeners(){
    //cuando se agrega un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click',agregarCurso);
    carrito.addEventListener('click',eliminarCurso);
}



//FUNCIONES
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


//ELIMINAR UN CURSO DEL CARRITO
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        // console.log(articulosCarrito);
        
        // render the articulosCarrito
        carritoHTML();
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

    //REVISA SI EL ELEMENTO YA EXISTE EN EL CARRITO
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    // console.log(existe);
    if(existe){
        const cursos = articulosCarrito.map((curso)=>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }
            return curso;
        });
        articulosCarrito = [...cursos];
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
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
                <img src=${infoCurso.imagen} width='100'>
            </td>
            <td>
                ${infoCurso.titulo}
            </td>
            <td>
                ${infoCurso.precio}
            </td>
            <td>
                ${infoCurso.cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id=${infoCurso.id} >X</a
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