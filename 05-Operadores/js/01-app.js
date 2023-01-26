const num1 = 20;
const num2_str = '20';
const num3 = 30;
// 01-MAYOR QUE , MENOR QUE
console.log(num1 < num3);
console.log(num1 > num3);

//02-COMPARAR 2 VALORES
console.log( num1 == num2_str ); //true
console.log( num1 == num3 ); //false

//strictamente
console.log(num1 === num2_str); //false
console.log(num1 === parseInt(num2_str)); //true
console.log(typeof num1); //number
console.log(typeof num2_str); //string
const pass1 = 'admin';
const pass2 = 'Admin';
console.log(pass1 != pass2); //true

//03-comparar null and undefined
console.log('03-SECCION');
let number;
console.log(number); //undefined
console.log(typeof number); //undefined

let skill = null;
console.log(skill); //null
console.log(typeof skill); //object
console.log(number === skill); //false
console.log(number == skill); //true
