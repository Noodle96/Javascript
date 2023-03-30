// VARIABLES Y SELECTORES 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');
let presupuesto;

// CLASES
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto= presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }
    addGasto(gastoNuevo){
        this.gastos = [...this.gastos,gastoNuevo];
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad,0);
        this.restante = this.presupuesto - gastado;
    }
}
class UI{
    insertarPresupuesto(objetoPresupuesto){
        const {presupuesto,restante} = objetoPresupuesto;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }
    verificarActualizarEstadoRestante(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        //comprobar <25
        if(restante < (presupuesto/4) ){
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if(restante < (presupuesto/2) ){
            restanteDiv.classList.remove('alert-success','alert-danger');
            restanteDiv.classList.add('alert-warning');
        }

        //si el restante es menor o igual a 0
        if(restante <=0){
            ui.imprimirAlerta('El presupuesto se ha agtado', 'alert-danger');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
    imprimirAlerta(mensaje,tipoMensaje){
        const div = document.createElement('div');
        div.classList.add('text-center','alert',tipoMensaje);
        div.textContent = mensaje;
        document.querySelector('.primario').insertBefore(div,formulario);
        setTimeout(() => {
            div.remove();
        }, 3000);
    }
    mostrarActualizarListadoGastos(){
        this.limpiarHTML(); //elimina el html
        const {gastos:gastosLista} = presupuesto;

        gastosLista.forEach( gastoItem =>{
            const {gasto, cantidad, id} = gastoItem;

            //Crear el li para cada gasto
            const liGasto = document.createElement('li');
            liGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // liGasto.setAttribute('data-id',id);
            liGasto.dataset.id = id;

            //agregar el html del gasto
            liGasto.innerHTML = `
                ${gasto} <span class="badge badge-primary badge-pill "> ${cantidad}</span>
            `;
            //boton para borrar el gasto
            const btnBorrar = document.createElement('btn');
            btnBorrar.classList.add('btn', 'btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            liGasto.appendChild(btnBorrar);

            //agregar al html
            gastoListado.appendChild(liGasto);
        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

}

// INSTANCIACION
const ui = new UI();



// EVENTOS 
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit',agregarGasto);
}



// FUNCIONES 
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || Number(presupuestoUsuario) <= 0){
        window.location.reload();
    }
    // PRESUPUESTO VALIDO
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();
    // LEER DATOS DEL FORMULARIO
    const gasto = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    if(gasto === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios','alert-danger');
        return;
    }
    else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida','alert-danger');
        return;
    }
    //GENERAR UN OBJETO CON EL GASTO
    const gastoObjeto = {gasto,cantidad, id:Date.now()}

    //AÑADIR UN NUEVO GASTO
    presupuesto.addGasto(gastoObjeto);
    ui.imprimirAlerta('Gasto agregado correctamente','alert-success');

    const {restante} = presupuesto;
    ui.actualizarRestante(restante);
    
    // < 25: rojo, < 50: amarillo
    ui.verificarActualizarEstadoRestante(presupuesto);

    //Imprimir y actualizar los gastos al HTML
    ui.mostrarActualizarListadoGastos();
    formulario.reset();
}