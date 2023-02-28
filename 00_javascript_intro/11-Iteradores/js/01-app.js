//01-FOR LOOP
console.log('01----');
// for(let e = 0 ;e < 10 ; e++){
//     // if (e%2==0) {
//     //     console.log(`Numero: ${e} es PAR`);   
//     // }
//     console.log(`Numero: ${e}`);  
//     if(e ==5) break;
// }

//02 CONTINUE AND BREAK
console.log('02-----');
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log('El 5 es un numero primo');
        continue;
    }
    console.log(`Numero ${index}`); 
}

//03-EL EJERCICIO DE FIZZ BUZZ
console.log('03---');
for (let index = 1; index < 100; index++) {
    if(index % 3 == 0 && index %5 == 0){
        console.log(`${index} FIZZ BUZZ`);
    }
    if(index % 3 == 0){
        console.log(`${index} fizz`);
    }
    if (index %5 == 0) {
        console.log(`${index} buzz`);
    }
}
//04-WHILE
console.log('04-while ----');
const primos = [1,3,5,7];
let e = 0;
while (e<primos.length) {
    console.log(primos[e]);
    e++;
}
//05- DO WHILE
console.log('05---');
let i = 100;
do {
    console.log(i);
    i++;
} while (i<10);

//06-.forEach and .map
console.log('06--');

const primosNuevo =  primos.forEach( element => {
    // console.log(`Primo: ${element}`);
    return `Primo: ${element}`;
});
// console.log(primosNuevo); //undefined


const copiaPrimos = primos.map( element => {
    return `Primo: ${element}`;
});
// console.log(copiaPrimos); // [1,3,5,7]


//07- FOR OF
console.log('07----');
console.log(primos);
console.log('for of');
for (const iterator of primos) {
    console.log(iterator) ;
}
//08- FOR IN
console.log('for in');
for (const key in primos) {
    console.log(key);
}

//for of sobre areglos
//for in sobre objetos