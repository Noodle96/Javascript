//VARIABLES
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

//LISTENERS
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('change', createUpdateObjCita);
    propietarioInput.addEventListener('change', createUpdateObjCita);
    telefonoInput.addEventListener('change', createUpdateObjCita);
    fechaInput.addEventListener('change', createUpdateObjCita);
    horaInput.addEventListener('change', createUpdateObjCita);
    sintomasInput.addEventListener('change', createUpdateObjCita);
    formulario.addEventListener('submit', validarAgregarCita);
}

////////////////////////////////////////////////////////////////////
/*--------------------------CREATE CLASES-------------------------*/
class Citas{
    constructor(){
        this.citas = [];
    }
}
class UI{
    mostrarAlerta(mensaje, tipoMensaje){
        const divError = document.createElement('div');
        divError.classList.add('text-center', 'alert', 'd-block','col-12', tipoMensaje);
        divError.textContent = mensaje;
        document.querySelector('.agregar-cita').insertBefore(divError,formulario);
        //quitar alerta despues de 4 segundos
        setTimeout(() => {
            divError.remove();
        }, 4000);
    }
}
/////////////////////////////////END////////////////////////////////


////////////////////////////////////////////////////////////////////
/*-----------INSTANCIA DE LAS CLASES - CREAR OBJETO---------------*/
const administrarCitas = new Citas();
const ui = new UI();
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}
/////////////////////////////////END////////////////////////////////


////////////////////////////////////////////////////////////////////
/*--------------------------FUNCIONES-----------------------------*/
//lee el contenido del campo y actualiza el objeto "citaObj"
function createUpdateObjCita(e){
    citaObj[e.target.name] = e.target.value.trim();
    console.log(citaObj);
}
//valida y agrega la cita a la lista del miembro de la clase Cita
function validarAgregarCita(e){
    e.preventDefault();
    // extraer la informacion del citaObj
    const { mascota, propietario,telefono,fecha, hora,sintomas} =  citaObj;
    //validar cada atributo del objeto citaObj
    if(mascota === '' || propietario === '' || telefono === '' ||
         fecha === '' || hora === '' || sintomas === ''){
            ui.mostrarAlerta('Todos los campos son Obligatorios', 'alert-danger');
            return;
    }
    //creando una nueva cita
}
/////////////////////////////////END////////////////////////////////
