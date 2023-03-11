function Seguro(marca, year, tipoCobertura){
    this.marca = marca;
    this.year = year;
    this.tipoCobertura = tipoCobertura;
}
//PROTOTYPE PARA CALCULAR EL SEGURO
Seguro.prototype.calcularCotizaSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
   let cantidad;
   const base = 1000;

   //VARIAR CANTIDAD RESPECTO A LA MARCA
   switch (this.marca) {
    case '1':
        cantidad = base*1.15;
        break;
    case '2':
        cantidad = base*1.05;
        break;
    case '3':
        cantidad = base*1.35;
        break;
    default:
        break;
    }
    //VARIAS CANTIDAD RESPECTO AL AÑO
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia*3)*cantidad)/100;
    // VARIAR CANTIDAD RESPECTO TIPO DE COBERTURA
    /**
        * SI EL TIPO DE COBERTURA ES BASICA , SE LE COBRA UN 30% MAS .
        * SI EL TIPO DE COBERTURA ES COMPLETA , SE LE COBRA UN 50% MAS .
        */
    if(this.tipoCobertura === 'basico'){
        cantidad *= 1.3;
    }else{
        cantidad *= 1.5;
    }
    return cantidad;
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
    const seguro = new Seguro(marca, year, tipoCobertura);
    seguro.calcularCotizaSeguro();
}