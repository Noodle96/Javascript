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
        // console.log(this.citas);
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

            //agregar heading and parrafos al divCita
            divCita.appendChild(mascotaHeading);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);


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
    //generar un id unico
    citaObj.id = Date.now();
    //creando una nueva cita
    // const nuevaCita = new Caracteristicas(mascota,propietario,telefono,fecha,hora,sintomas,Date.now());
    // administrarCitas.addCita(nuevaCita);

    //se pasa una copia cuando es 'OBJETO GLOBAL'
    administrarCitas.addCita({...citaObj});
    ui.mostrarAlerta('Cita Agregada Correctamente','alert-success');

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
/////////////////////////////////END////////////////////////////////
