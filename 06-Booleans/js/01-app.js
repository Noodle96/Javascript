//CREACION DE BOOLEANS
console.log('01-BOOLEAN');
const b1 = true;
const b2 = false;
const b3 = 'true';
const b4 = new Boolean(true);

console.log(b1 === b3); //false
console.log(b4); //Boolean{true}
console.log(typeof b4); //object

//O2-COMPARACION DE BOOLEAN
console.log('02-booleans');
console.log(b1 ==true); //true
console.log(b1 ===true); //true

//03 BUENAS PRACTICAS AL EVALUAR UN TIPO BOOLEAN
console.log('03-goodPractice');
const aprobado = true;
if(aprobado){
    console.log('the student has been in the class');
}else{
    console.log('Abandono');
}
//operador ternario
console.log(aprobado ? 'the student has been in the classs' : 'ABANDONO' );