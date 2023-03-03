//VARIABLES;
const resultado  = document.querySelector('#resultado');
const colores = ['#C0C0C0','#808080','#000000','#FF0000','#800000','#FFFF00',
                    '#808000','#00FF00','#008000','#00FFFF','#008080','#0000FF',
                    '#000080','#FF00FF','#800080',
                ];

//EVENTOS
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos();
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


// marca: 'BMW',
// 		modelo: 'Serie 3',
// 		year: 2020,
// 		precio: 30000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'