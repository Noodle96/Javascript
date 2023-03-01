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
        // console.log(e.target.id);
        // console.log(e.target.parentElement);
        if(e.target.value.trim() === ''){
            generarAlertaHTML(`El campo ${e.target.id} es obligatorio`,e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
    }

    function generarAlertaHTML(msg, referenciaPadre){
        //verificando que ya existe una alerta
        limpiarAlerta(referenciaPadre);
        const error = document.createElement('p');
        error.textContent = msg;
        error.classList.add('bg-red-600','text-white','p-2','text-center');
        referenciaPadre.appendChild(error);
    }

    function limpiarAlerta(referenciaPadre){
        const alerta = referenciaPadre.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
});