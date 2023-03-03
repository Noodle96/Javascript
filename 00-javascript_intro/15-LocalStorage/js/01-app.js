//001-- setItem()
//LOCALSTORAGE  store only string
// Convert object to string => JSON.stringify(object)
// Convert string to Object => JSON.parse(string);

localStorage.setItem('Nick', 'Russell');
localStorage.setItem('Age',1);
//STORE ONE OBJECT IN LOCALSTORAGE
const producto = {
    nombre: 'Vanish x750 FGH',
    precio: 6.91,
}
const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);

console.log(producto);
console.log(productoString);

//STORE A ARRAY IN LOCALSTORAGE
const meses = ['January', 'Febrary', 'March', 'April'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses',mesesString);

console.log(meses);
console.log(mesesString);


//002-- getItem()
//OBTENER DATOS DEL LOCALSTORAGFE
console.log('002---');
const nick = localStorage.getItem('Nick');
const age = localStorage.getItem('Age');
// console.log(localStorage.length);
// console.log(typeof nick); // string
// console.log(typeof age); //string

const getProducto = localStorage.getItem('producto');
const getMeses= localStorage.getItem('meses');

// console.log(typeof getProducto);//string
const productoParseado = JSON.parse(getProducto);
const mesesParseado = JSON.parse(getMeses);

console.log(typeof productoParseado); //object
console.log(typeof mesesParseado); //object
console.log(productoParseado); // print objecto
console.log(mesesParseado); // print array
