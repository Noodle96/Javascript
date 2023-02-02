//001- DOMContentLoaded event
console.log('001----');
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento Listo');
})

// EVENTOS CON EL MOUSE
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
nav.addEventListener('mouseenter',()=>{
    console.log('entrando a la navegacion');
});