//EN LAS FUNCIONES DE PROTOTYPES UTILIZAR  FUNCTIONS AND NOT ARROW FUNCTIONS
function Cliente(name, saldo){
    this.name = name;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Platinum';
    } else if(this.saldo > 5000){
        tipo = 'Gold';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.name} tiene un saldo de ${this.saldo} y es de tipo ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(montoRetirar){
    this.saldo -=montoRetirar;
}

const russell = new Cliente('Russell',21000);
console.log(russell);
console.log(russell.tipoCliente());
console.log(russell.nombreClienteSaldo());
russell.retirarSaldo(15000);
console.log(russell.nombreClienteSaldo());

console.log('Herencia en prototypes');
function Persona(name,saldo,telefono){
    Cliente.call(this,name,saldo);
    this.telefono = telefono;
}
// HEREDANDO LAS FUNCIONES DE CLIENTE A PERSONA
Persona.prototype = Object.create(Cliente.prototype);
// CON EL CONSTRUCTOR
Persona.prototype.constructor = Cliente;

const jorge = new Persona('Jorge',14000,999999999);
console.log(jorge.tipoCliente());

Persona.prototype.mostrarTelefono = function(){
    return  `El telefono de ${this.name} es ${this.telefono}`;
}

console.log(jorge.mostrarTelefono());
