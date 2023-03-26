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
}
class UI{
    insertarPresupuesto(objetoPresupuesto){
        const {presupuesto,restante} = objetoPresupuesto;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
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
    console.log('desde agrgar gastos');
    e.preventDefault();
    // LEER DATOS DEL FORMULARIO
    const gasto = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;
    if(gasto === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios','alert-danger');
        return;
    }
    else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida','alert-danger');
        return;
    }
}