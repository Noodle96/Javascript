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
    mostrarAutos();

    // llena las option del campo year
    llenarSelectYear();
});


//EVENT LISTENER  PARA LOS SELECT DE BUSQUEDA
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change',(e)=>{
    datosBusqueda.year = e.target.value;
});
minimo.addEventListener('change',(e)=>{
    datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change',(e)=>{
    datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change',(e)=>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});



//FUNCIONES
function mostrarAutos(){
    autos.forEach((auto,index) => {
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
    const resultado = autos.filter(filtrarMarca);
    console.log(resultado);
}
function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}