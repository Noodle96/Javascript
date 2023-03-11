function Seguro(marca, year, tipoCobertura){
    this.marca = marca;
    this.year = year;
    this.tipoCobertura = tipoCobertura;
}

function UI(){}

//llenar los años en el (select id:year)
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
//CREA Y MUESTRA UNA ALERTA DE EXITO O ERROR
UI.prototype.crearAlerta = (mensaje, tipo)=>{
    const div = document.createElement('DIV');
    div.classList.add('mensaje', 'mt-10',tipo);
    div.textContent = mensaje;
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));
    setTimeout(() => {
        div.remove();
    }, 3000);
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
    //LEER EL CAMPO AÑO DEL FORM
    const year = document.querySelector('#year').value;
    //LEEF RL CAMPO TIPO DE COBERTURA DEL FORM
    const tipoCobertura = document.querySelector('input[name="tipo"]:checked').value;
    if(marca === '' || year === '' || tipoCobertura === ''){
        ui.crearAlerta('Todos los campos son Obligatorios','error');
        return;
    }
    ui.crearAlerta('Cotizando ...','correcto');

}