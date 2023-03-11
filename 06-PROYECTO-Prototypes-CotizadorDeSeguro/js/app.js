function Seguro(marca, year, tipoCobertura){
    this.marca = marca;
    this.year = year;
    this.tipoCobertura = tipoCobertura;
}

function UI(){}

UI.prototype.llenarYears = ()=>{
    const maxYear = new Date().getFullYear();
    const minYear = maxYear-15;
    const selectYear = document.querySelector('#year');
    let option  = null;
    for (let e = maxYear; e >= minYear; e--){
        option = document.createElement('OPTION');
        option.value = option.textContent = e;
        selectYear.appendChild(option)
    }
}

const ui = new UI();
document.addEventListener('DOMContentLoaded', ()=>{
        ui.llenarYears();
});