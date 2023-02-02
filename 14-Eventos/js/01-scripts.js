//001- DOMContentLoaded event
console.log('001----');
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento Listo');
})

// 002-  EVENTOS CON EL MOUSE
console.log('002----');
const nav = document.querySelector('.navegacion');
//--------------- CLICK
// nav.addEventListener('click',()=>{
//     console.log('click en nav');
// });

//--------------MOUSEENTER
// nav.addEventListener('mouseenter',()=>{
//     console.log('pasando por la navegacion');
// });

//------------ MOUSEOUT
// nav.addEventListener('mouseout',()=>{
//     console.log('saliendo de la navegacion');
// });


//------------- MOUSEENTER
// nav.addEventListener('mouseenter',()=>{
//     console.log('entrando a la navegacion');
// });

//003-VENTOS QUE SUCEDEN CON EL TECLADO
console.log('03---');
//---------KEYDOWN
const busqueda = document.querySelector('.busqueda');
// busqueda.addEventListener('keydown',()=>{
//     console.log('presionando una tecla .....');
// });

// -----------KEYUP
// busqueda.addEventListener('keyup',()=>{
//     console.log('levantando la tecla .....');
// });

//------------ BLUR
// busqueda.addEventListener('blur',()=>{
//     console.log('click fuera del form .....');
// });

// ----------COPY
// busqueda.addEventListener('copy',()=>{
//     console.log('Se ha copiado el texto del form.....');
// });


//---------PASTE
// busqueda.addEventListener('paste',()=>{
//     console.log('Se ha pegado algo de texto en el form.....');
// });


//---------CUT
// busqueda.addEventListener('cut',()=>{
//     console.log('Se ha cortado algo de texto en el form.....');
// });

// ---------- INPUT
busqueda.addEventListener('input',(e)=>{
    console.log(e.target.value);
});

//004-EVENTO SUBMIT A UN FORMULARIO
console.log('004--- ');
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(e);
}

//005EVENTOS AL DAR SCROLL CON EL MOUSE
console.log('005--');
window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    // console.log('scrolling');
    const ubicacion = premium.getBoundingClientRect();
    // console.log(ubicacion);
    if(ubicacion.top < 900){
        console.log('el elemento ya esta visible');
    }else{
        console.log('Aun no , da mas scroll');
    }
});

//006--- EVENT BUBLING
console.log('006----');
const cardB = document.querySelector('.card');
const infoDivB = document.querySelector('.info');
const tituloB = document.querySelector('.titulo');
//con e.stopPropagation() detenemos la propagacion de hijos a padres

// cardB.addEventListener('click',(e)=> {
//     e.stopPropagation();
//     console.log('Click en card');
// });

// infoDivB.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('Click en infoDiv');
// });

// tituloB.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log('Click en titulo');
// });

//007 PREVENIR EL EVENT BUBBLING CON DELEGATION
console.log('007---- ');
cardB.addEventListener('click', e=>{
    if(e.target.classList.contains('card')){
        console.log('Diste click en card');
    }
    if(e.target.classList.contains('info')){
        console.log('Diste click en info');
    }
    if(e.target.classList.contains('categoria')){
        console.log('Diste click en categoria');
    }
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }
});