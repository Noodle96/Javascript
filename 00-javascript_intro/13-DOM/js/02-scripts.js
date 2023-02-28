//EVENTOS CON JAVASCRIPT
console.log('Eventos con javascript');
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',()=>{
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';
    }
});


console.log(btnFlotante);
console.log(footer);