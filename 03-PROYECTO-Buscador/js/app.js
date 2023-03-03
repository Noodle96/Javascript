//VARIABLES;
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');




//CONTENEDOR PARA EL RESULTADO
const resultado  = document.querySelector('#resultado');

const colores = ['#C0C0C0','#808080','#000000','#FF0000','#800000','#FFFF00',
                    '#808000','#00FF00','#008000','#00FFFF','#008080','#0000FF',
                    '#000080','#FF00FF','#800080',
                ];
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;


//GENERAR UN OBJETO PARA LA BUSQUEDA
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}



//EVENTOS
document.addEventListener('DOMContentLoaded', ()=>{
    // muestra los auto de la DB (db.js)
    mostrarAutos(autos);

    // llena las option del campo year
    llenarSelectYear();
});


//EVENT LISTENER  PARA LOS SELECT DE BUSQUEDA
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change',(e)=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change',(e)=>{
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
});
maximo.addEventListener('change',(e)=>{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
});
puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change',(e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
});



//FUNCIONES
function mostrarAutos(db_autos){
    limpiarHTML();
    db_autos.forEach((auto,index) => {
        const {marca, modelo,year,precio,puertas,color,transmision} = auto;
        const rowAuto = document.createElement('P');
        rowAuto.style.color = colores[Math.floor(Math.random() * colores.length)];
        rowAuto.textContent = `
            ${index}) ${marca} ${modelo} - 
            ${year} - ${puertas} Puertas -
            Transmision: ${transmision} -
            Precio: ${precio} - 
            Color: ${color}.
        `;
        resultado.appendChild(rowAuto);
    });
}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelectYear(){
    for(let i_year = maxYear; i_year >=minYear; i_year--){
        const option = document.createElement('OPTION');
        option.value = i_year;
        option.textContent = i_year;
        year.appendChild(option);
    }
}

//FUNCION QUE FILTRA EN BASE A LA BUSQUEDA
function filtrarAuto(){
    const resultadoFinal = autos.filter(filtrarMarca).filter(filtrarByYear)
                        .filter(filtrarByMinimo).filter(filtrarByMaximo)
                        .filter(filtrarByPuertas).filter(filtrarByTransmision)
                        .filter(filtrarByColor);
    // console.log(resultadoFinal);
    mostrarAutos(resultadoFinal);
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarByYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}
function filtrarByMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarByMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarByPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarByTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarByColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}
