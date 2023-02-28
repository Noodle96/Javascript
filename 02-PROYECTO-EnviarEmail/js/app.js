document.addEventListener('DOMContentLoaded', function(){
    // console.log('desde DOMContentLoaded');
    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //EVENTOS IDEALES PARA VALIDAR EL FORMULARIO:
    //event blur cuando abandonas un campo
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        //validando que el campo no este vacio
        if(e.target.value.trim() === ''){
            generarAlertaHTML();
        }else{
            console.log('no vacio');
        }
    }

    function generarAlertaHTML(){
        const error = document.createElement('p');
        error.textContent = 'Hubo un error';
        error.classList.add('bg-red-700','text-white','p-2','text-center');
        formulario.appendChild(error);
    }
});