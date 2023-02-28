// 01-CREACION DE NUMEROS
const numero0 = 30;
const numero1 = '30';
const numero2 = 34.56;
const numero3 = .198;
// console.log(numero0);
// console.log(numero1);
// console.log(numero2);
// console.log(numero3);



//02-OPERACIONES EN JAVASCRIPT
let result;
// result = numero0 + numero2;
// result = numero0 - numero2;
// result = numero0 * numero2;
// result = numero0 / numero2;
// result = 14%3;
// console.log(result);


//03-OBJETO MATH
let objeto;
objeto = Math.PI;
objeto = Math.round(2.4); // 2
objeto = Math.round(2.5); // 3
objeto = Math.round(2.6); // 3
objeto = Math.ceil(2.4); // 3
objeto = Math.ceil(2.6); // 3
objeto = Math.floor(2.4); // 2
objeto = Math.floor(2.6); // 2
objeto = Math.sqrt(900); //30
objeto = Math.abs(500) // 500
objeto = Math.abs(-400) // 500
objeto = Math.pow(3,5) // 243
objeto = Math.min(-4,5,6,7); // -4
objeto = Math.max(-5,0,11,-3); // 11
objeto = Math.random();
objeto = Math.ceil(Math.random()*100);
// console.log(objeto);

// 04-ORDEN DE LAS OPERACIONES
let ordenOperaciones;
ordenOperaciones = 20+30*2; // 80
ordenOperaciones = (20+30)*2; //100s
// console.log(ordenOperaciones);

//05-INCREMENTOS Y DECREMENTOS
let puntaje = 5;
// puntaje++; // 6
puntaje--; //4
// console.log(puntaje);


// 06-CONVERTIR STRING A NUMEROS
const conversion = "20";
const conversion2 ='34.56';
// console.log(typeof conversion); //string
console.log(Number.parseInt(conversion));
const tt = Number.parseFloat(conversion2);
console.log(Number.isInteger(tt)); //false
