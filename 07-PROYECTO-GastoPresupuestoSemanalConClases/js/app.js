// VARIABLES Y SELECTORES 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');
let presupuesto;

// EVENTOS 
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}



// CLASES
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto= presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }
}
class UI{}
const ui = new UI();


// FUNCIONES 
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || Number(presupuestoUsuario) <= 0){
        window.location.reload();
    }
    // PRESUPUESTO VALIDO
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
}