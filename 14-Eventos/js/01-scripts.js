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


//---------PASTE
// busqueda.addEventListener('cut',()=>{
//     console.log('Se ha cortado algo de texto en el form.....');
// });

// ---------- INPUT
busqueda.addEventListener('input',(e)=>{
    console.log(e.target.value);
});