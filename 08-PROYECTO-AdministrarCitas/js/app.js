//VARIABLES
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorFormlario = document.querySelector('.agregar-cita');
const contenedorCitas = document.querySelector('#citas');
let modoEdicion = false;

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
class Caracteristicas{
    constructor(mas,pro,tel,fec,hor,sin,id){
        this.mascota = mas;
        this.propietario = pro;
        this.telefono = tel;
        this.fecha = fec;
        this.hora = hor;
        this.sintomas = sin;
        this.id = id;
    }
}
class Citas{
    constructor(){
        this.citas = [];
    }
    addCita(cita){
        this.citas = [...this.citas,cita];
        // console.log('dese add cita');
        // console.log(this.citas);
    }
    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id != id);
        // console.log('desde eliminar cita');
        // console.log(this.citas);
    }
    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada:cita);
    }
}
class UI{
    mostrarAlerta(mensaje, tipoMensaje,padre=contenedorFormlario, hijo=formulario){
        const divError = document.createElement('div');
        divError.classList.add('text-center', 'alert', 'd-block','col-12', tipoMensaje);
        divError.textContent = mensaje;
        padre.insertBefore(divError,hijo);
        //quitar alerta despues de 4 segundos
        setTimeout(() => {
            divError.remove();
        }, 4000);
    }
    mostrarCitastoHTML({citas}){
        this.limpiarHTML();
        citas.forEach( cita => {
            const { mascota, propietario,telefono,fecha, hora,sintomas,id} =  cita;
            //Crear el div para la cita
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            //Scripting de los elemento de la cita
            const mascotaHeading = document.createElement('h2');
            mascotaHeading.classList.add('card-title','font-weight-bolder');
            mascotaHeading.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span>${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span>${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span>${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span>${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span>${sintomas}
            `;

            //btn para eliminar una cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML = `
                Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              
            `;
            btnEliminar.onclick = () => eliminarCita(id);

            //btn para editar una cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `
                Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg> 
            `;
            btnEditar.onclick = () => cargarEdicion(cita);

            //agregar heading and parrafos al divCita
            divCita.appendChild(mascotaHeading);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //agregar las citas al HTML(padre) => contenedorCitas
            contenedorCitas.appendChild(divCita);
        } );

    }
    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
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
    // console.log(citaObj);
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
}
//reinicia el objeto global
function reiniciarObjetoGlobal(){
    citaObj.mascota = '';
    citaObj.propietario= '';
    citaObj.telefono= '';
    citaObj.fecha= '';
    citaObj.hora= '';
    citaObj.sintomas= '';
}
function eliminarCita(id){
    administrarCitas.eliminarCita(id);
    //Muestra todas las citas al HTML
    ui.mostrarCitastoHTML(administrarCitas);
    //mostrar un mensaje => cita eliminada
    const contenedorCitas = document.querySelector('.contenedor-citas');
    const hijoContenedorCitas = document.querySelector('#administra');
    ui.mostrarAlerta('Cita eliminada correctamente','alert-info', contenedorCitas, hijoContenedorCitas)
}
function cargarEdicion(cita){
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
/////////////////////////////////END////////////////////////////////

