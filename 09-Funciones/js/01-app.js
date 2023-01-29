//01- DECLARACIONES DE FUNCIONES
// function declaration
console.log('01 ----');
function sumar(){
    console.log(4);
}
sumar();
//function expression

const sumar2 = function(){
    console.log(6);
}
sumar2();
//02 DIFERENCIA ENTRE FUNCTION DECLARATION AND FUNCTION EXPRESSION
//the function declaration se puede declarar antes o despues
//sin embargo, las function expression se declaran despues

//03-FUNCIONES NATIVAS EN JAVASCRIPT
console.log('03---');
// alert('alert llamado');
// prompt('Your name ?');
//
///
//
//04- DIFERENCIA ENTRE FUNCION Y METODO
console.log('04----');
parseInt("20"); //function
numero1 = 20;
numero1.toString(); //method


//05-PARAMETROS Y ARGUMENTOS EN FUNCIONES
//06- PARAMETROS POR DEFAULT
console.log('05---');
console.log('06---');
function multiplicar(a=100,b=2){ //parametros de la funcion
    return a*b;
}
console.log(multiplicar(2,3)); //argumentos de la funcion
console.log(multiplicar());

//07- COMUNICACION DE FUNCIONES ENTRE SI
console.log('07---');
function firstFunction(){
    console.log('FirstFunction');
    secondFunction();
}

function secondFunction(){
    console.log('Second Function');
}

firstFunction();

//08-FUNCIONES QUE RETORNEN VALORES
console.log('08-----');
function restar(a,b){
    return a-b;
}

console.log(restar(14,7));

//09-AÑADOR FUNCIONES EN UN OBJETO
console.log('09---');
const reprocutor = {
    nombre : 'RKJ 98',
    reproducir:function(){
        console.log('Reproduciendo');
    }
}
reprocutor.reproducir();

//10-ARROW FUNCTIONS
//11-VENTAJAS DE LOS ARROW FUNCTIONS
console.log('10-arrow functions');
console.log('11-arrow functions-VENTAJAS');
const learning = function(){
    console.log('learning js');
}

const learning2 = (tecnologia) => `Aprendiendo ${tecnologia}`;
const learning3 = red => `Aprendiendo ${red}`;

learning();
learning2('java');
console.log(learning3('redes concava'));

//12-  ARROW FUNCTIONS EN UN FOREACH Y UN MAP
//foreach
primos = [2,3,5,7,11,13];
console.log('..forEach');
primos.forEach( element => {
    console.log(element);
});
//.map 
console.log('.map');
const cpyPrimos = primos.map( elemento =>  elemento);
console.log(cpyPrimos);

//13 arrow functions en objetos
reprocutor.cantar = () => console.log('Cantando');
console.log(reprocutor);
reprocutor.reproducir();
reprocutor.cantar();