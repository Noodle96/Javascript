"use strict";
//01-CREACION DE OBJETOS EN JAVASCRIPT
// agrupacion de un objeto
console.log('01---');
// const nombre = 'PC Gamer';
// const precio = 560.6;
// const disponibilidad = false; 

const producto = {
    nombre: 'PC Gamer',
    precio: 908.56,
    disponibilidad: true,
}
console.log(producto);

//02- ACCEDER A LOS VALORES DE UN OBJETO
console.log('02---');
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponibilidad);

console.log(producto['nombre']);

//03-AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO
console.log('03---');
producto.imagen = 'imagen.jpg';
//eliminar propiedades de un objeto
// delete producto.disponibilidad;
console.log(producto);

//O4- DESTRUCTURING DE UN OBJETO
console.log('04---');
const {nombre, precio, disponibilidad} = producto;
console.log(nombre, precio, disponibilidad);

//05- OBJETOS DENTRO UN UN OBJETO
//06 DESTRUCTUTING  DE OBJETOS ANIDADOS
console.log('05');
console.log('06');

const product = {
    name: 'PC Gamer',
    price: 908.56,
    availability: true,
    info: {
        medidad: {
            peso: 56.4,
            ancho :1,
        },
        fabricacion:{
            pais: 'Colombia',
            region: 'sur',
        },
    }
}
const {name, info,info:{fabricacion:{pais}}} = product;
// console.log(info);
// console.log(fabricacion);
console.log(pais);

//07- PROBLEMA CON LOS OBJETOS
//08- CONGELAR UN OBJETO PARA QUE SUS PROPIEDADES NO SE PUEDAN MODIFICAR
console.log('07,08 ');
//las propiedades de un ' const objeto ' si se pueden modificar
const student = {
    name: 'elias',
    age: 45,
}
console.log(Object.isFrozen(student)); //false
Object.freeze(student);
console.log(Object.isFrozen(student)); //true+
// student.src = 'logo.png'; // ya no se pueden porque esta congelado
console.log(student);

//09 OBJECT SEAL => sellar un objeto
// se puede modificar pero no se puede agregar o eliminar
console.log('09---');
const trainer = {
    name : 'Pedro',
    lastname : 'Quispe',
}
console.log(Object.isSealed(trainer)); //false
Object.seal(trainer);
console.log(Object.isSealed(trainer)); //true
//THUS
trainer.name = 'Russell'; //OK
// trainer.src = 'logo.png'; //Cannot add property src, object is not extensible
console.log(trainer);

//10- COPIAR 2 OBJETOS
console.log('10 ---');
const obj1 = {
    a: 'a',
    b: 'b',
}
const obj2 = {
    c:'c',
    d: 'd',
}
console.log(obj1);
console.log(obj2);

const resultado1 = Object.assign(obj1, obj2);
console.log(resultado1 );
const resultado2 = {...obj1,...obj2}
console.log(resultado2);

//11- FUNCIONES EN OBJETOS Y ACCEDER A SUS VALORES - this
console.log('11---');

//object literal
const productEnesimo = {
    nameE: 'PC Gamer',
    priceE: 908.56,
    availabilityE: true,
    infoE: {
        medidadE: {
            pesoE: 56.4,
            anchoE :1,
        },
        fabricacionE:{
            PageTransitionEvent: 'Colombia',
            regionE: 'sur',
        },
    },
    mostrarInfo: function(){
        console.log(`El productoEnesimo tiene el nombre de ${this.nameE} y el precio de ${this. priceE}`);
    }
}
console.log(productEnesimo);
productEnesimo.mostrarInfo();

//12- OBJECT CONSTRUCTOR => creacion de objetos
console.log('12----');
function Carta(nombre, elixir){
    this.name = nombre;
    this.elixir = elixir;
}
const carta1 = new Carta('Caballero', 3);
console.log(carta1);
const carta2 = new Carta('Meganight', 6);
console.log(carta2);

//13- .keys, .values,.entries  DE UN OBJETO
console.log('13---');
const cartaCR = {
    nombre: 'Princess',
    elixir: 3,
}
console.log(Object.keys(cartaCR));
console.log(Object.values(cartaCR));
console.log(Object.entries(cartaCR));