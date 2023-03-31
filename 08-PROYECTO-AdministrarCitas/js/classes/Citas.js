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
export default Citas;