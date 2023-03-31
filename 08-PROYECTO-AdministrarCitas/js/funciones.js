import Citas from './classes/Citas.js';
import UI from './classes/UI.js';
import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './selectores.js';

const administrarCitas = new Citas();
const ui = new UI(administrarCitas);
let modoEdicion = false;
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}

//lee el contenido del campo y actualiza el objeto "citaObj"
export function createUpdateObjCita(e){
    citaObj[e.target.name] = e.target.value.trim();
    // console.log(citaObj);
}
//valida y agrega la cita a la lista del miembro de la clase Cita
export function validarAgregarCita(e){
    e.preventDefault();
    // extraer la informacion del citaObj
    const { mascota, propietario,telefono,fecha, hora,sintomas} =  citaObj;
    //validar cada atributo del objeto citaObj
    if(mascota === '' || propietario === '' || telefono === '' ||
         fecha === '' || hora === '' || sintomas === ''){
            ui.mostrarAlerta('Todos los campos son Obligatorios', 'alert-danger');
            return;
    }
    if(modoEdicion){
        ui.mostrarAlerta('Editado correctamente','alert-success');
        //Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj});
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        fechaInput.disabled = false;
        horaInput.disabled = false;
        modoEdicion = false;
    }else{
        //generar un id unico
        citaObj.id = Date.now();
        //creando una nueva cita
        // const nuevaCita = new Caracteristicas(mascota,propietario,telefono,fecha,hora,sintomas,Date.now());
        // administrarCitas.addCita(nuevaCita);

        //se pasa una copia cuando es 'OBJETO GLOBAL'
        administrarCitas.addCita({...citaObj});
        ui.mostrarAlerta('Cita Agregada Correctamente','alert-success');
    }

    //resetearFormulario
    formulario.reset();

    //Reinicia los valores del objeto citaObj  con string vacios
    reiniciarObjetoGlobal();

    //Muestra todas las citas al HTML
    ui.mostrarCitastoHTML(administrarCitas);
    ui.showHeading(administrarCitas);
}
//reinicia el objeto global
export function reiniciarObjetoGlobal(){
    citaObj.mascota = '';
    citaObj.propietario= '';
    citaObj.telefono= '';
    citaObj.fecha= '';
    citaObj.hora= '';
    citaObj.sintomas= '';
}
export function eliminarCita(id){
    administrarCitas.eliminarCita(id);
    //Muestra todas las citas al HTML
    ui.mostrarCitastoHTML(administrarCitas);
    //mostrar un mensaje => cita eliminada
    const contenedorCitas = document.querySelector('.contenedor-citas');
    const hijoContenedorCitas = document.querySelector('#administra');
    ui.mostrarAlerta('Cita eliminada correctamente','alert-info', contenedorCitas, hijoContenedorCitas)
    ui.showHeading(administrarCitas);
}
export function cargarEdicion(cita){
    const { mascota, propietario,telefono,fecha, hora,sintomas,id} =  cita;
    //llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    fechaInput.disabled = true;
    horaInput.value= hora;
    horaInput.disabled = true;
    sintomasInput.value = sintomas;

    //lenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario= propietario;
    citaObj.telefono= telefono;
    citaObj.fecha= fecha;
    citaObj.hora= hora;
    citaObj.sintomas= sintomas;
    citaObj.id = id;

    //cambiar el value del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    modoEdicion = true;
}