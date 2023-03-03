//LOCALSTORAGE  store only string
// to convert to string => (JSON.stringify(object))
localStorage.setItem('Nick', 'Russell');

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
localStorage.setItem('MESEs',mesesString);

console.log(meses);
console.log(mesesString);