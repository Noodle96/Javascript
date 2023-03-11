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

eventListeners();

function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', verificarCampos);
}

function verificarCampos(e){
    e.preventDefault();
    //LEER EL CAMPO MARCA DEL FORM
    const marca = document.querySelector('#marca').value;
    console.log(marca);
    //LEER EL CAMPO AÑO DEL FORM
    const year = document.querySelector('#year').value;
    console.log(year);
    //LEEF RL CAMPO TIPO DE COBERTURA DEL FORM
    const tipoCobertura = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipoCobertura);
    if(marca === ''){
        console.log('Marca vacia');
    }
}