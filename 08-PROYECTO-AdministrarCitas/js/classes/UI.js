import {eliminarCita, cargarEdicion} from '../funciones.js';
import {contenedorFormlario, formulario, contenedorCitas, headingAdministra} from '../selectores.js';


class UI{
    constructor(CitasObj){
        this.showHeading(CitasObj);
    }
    showHeading({citas}){
        if(citas.length > 0){
            headingAdministra.textContent = 'Administra tus Citas';
        }else{
            headingAdministra.textContent = 'No hay citas, comienza creando una';
        }
    }

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

export default UI;