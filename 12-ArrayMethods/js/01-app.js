const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//01 .some
//comprobar si elemento existe en un arreglo de un solo elemento
console.log('01---');
meses.forEach(mes => {
    if (mes==='Enero') {
        // console.log('Mes de Enero si existe');
    }
});
const resultado = meses.includes('Enero');
// console.log(resultado); //true
const resultado2 = meses.some(mes=>{
    return mes==='Abril';
});
// console.log(resultado2); //true

//comprobar si elemento existe en un arreglo de objetos
const existe = carrito.some((producto)=> {
    return producto.nombre === 'Celular';
});
// console.log(existe); //true

//02-FIND INDEX
console.log('02---');
meses.forEach((mes,i) => {
    console.log(i ,mes); // 0, Enero ; 1, Febrero, ....
});
//encontrar el indice de un elemento
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice); // 3
const indice2 = meses.findIndex(mes => mes === 'Abrillll');
console.log(indice2); // -1

const indice3 = carrito.findIndex( producto => producto.precio === 700);
console.log(indice3); // 5


//03- REDUCE
console.log('03---');
//calcular el precio total del carrito
let total = 0;
carrito.forEach(producto=> total+=producto.precio);
console.log(total); // 2100

let precioTotal2 = carrito.reduce((total,producto)=>total+producto.precio,0);
console.log(precioTotal2); // 2100


//04- FILTER
console.log('04---');
let filtracion;
filtracion = carrito.filter( producto => producto.precio>400);

console.log(filtracion); // [{},{}]


//05- FIND , solo retorna el primer elemento que encuentra
console.log('05---');
let findElement;
carrito.forEach((producto,index)=>{
    if(producto.nombre === 'Tablet'){
        findElement = carrito[index];
        // findElement = producto;
    }
});
console.log(findElement); // {nombre: 'Tablet', precio: 100}
findElement= carrito.find(producto => producto.nombre==='Audifonos');
console.log(findElement); // {nombre:'Audifonos, precio:300}

//06- EVERY
console.log('06-----');
let every = carrito.every(producto => producto.precio < 500);
console.log(every); //false
//con el metodo .every TOdos DEBEN DE CUMPLIR CON DICHA CONDICION

 //07- CONCAT
console.log('07---');
const primos = [2,3,5,7];
const concatenacion= meses.concat(primos);
console.log(meses);
console.log(primos);
console.log(concatenacion);
const concatenacion2 = [...meses, ...primos];
console.log(concatenacion2);

// 08- SPRED OPERATOR
console.log('08---');
//nothing here