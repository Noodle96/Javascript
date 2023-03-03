//VARIABLES;
const resultado  = document.querySelector('#resultado');
const colores = ['#C0C0C0','#808080','#000000','#FF0000','#800000','#FFFF00',
                    '#808000','#00FF00','#008000','#00FFFF','#008080','#0000FF',
                    '#000080','#FF00FF','#800080',
                ];
const year = document.querySelector('#year');
console.log(year);
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//EVENTOS
document.addEventListener('DOMContentLoaded', ()=>{
    // muestra los auto de la DB (db.js)
    mostrarAutos();

    // llena las option del campo year
    llenarSelectYear();
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