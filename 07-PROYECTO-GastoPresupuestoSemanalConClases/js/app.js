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
}
const ui = new UI();




// EVENTOS 
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
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