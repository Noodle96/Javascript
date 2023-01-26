//01-CREATE ARRAYS
console.log('01---');
const numeros = [10,20,30,40,'can'];
console.log(numeros);
const meses = new Array('January', 'Febrary','march','april','may','june');
console.log(meses);

//02-ACCEDER A LOS VALORES DE UN ARRRAY
console.log('02---');
// console.table(numeros);
console.log(numeros[0]);

//03-RECORRERUN ARRAY
console.log('03---');
for(let e = 0 ; e< meses.length; e++){
    console.log(meses[e]);
}

//04-AGREGAR NUEVOS VALORES A UN ARRAY
console.log('04---');
meses[0] = 'januaryNew';
console.log(meses);

//05-AÑADIR NUEVOS ELEMENTOS AL FIN O AL INICIO DE UN ARREGLO
console.log('05---');
meses.push('July');
// meses.unshift('INIT'); //agrega al inicio
console.log(meses);

//06- AGREGAR ELEMENTOS CON EL SPRED OPERATOR
console.log('06---');
// nothing

//07-ELIMINAR ELEMENTOS CON SPLICE
console.log('07---');
console.log(meses); 
meses.pop();//eliminar  ultimo elemento
console.log(meses);

// meses.shift();//eliminar el primer elemento
// console.log(meses);

//eliminar cualquier elemento
// meses.splice(3,1);
// console.log(meses);

//08-DESTRUCTURING IN ARRAY
console.log('08----');
const primos = [2,3,5,7,11];
console.log(primos); // [2,3,5,7,11]
const [primero, segundo] = primos;
console.log(primero,segundo); // 2 3
const [,,tercero] = primos;
console.log(tercero); //5
const [, , ...ultimos] = primos;
console.log(ultimos);

//09- foreach PARA ITERAR UN ARRAY
console.log('09 --- ');
console.log(primos);
//foreach
primos.forEach((element) => {
    console.log(element);
});


//10- .map PARA ITERAR UN ARRAY
console.log('10----');
const cpyPrimos = primos.map((elemento)=> {
    return elemento;
});

console.log(cpyPrimos);