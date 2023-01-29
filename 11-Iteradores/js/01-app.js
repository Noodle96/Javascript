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
