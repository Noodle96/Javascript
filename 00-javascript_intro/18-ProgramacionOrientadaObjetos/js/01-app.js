// CLASS DECLARATION
class Cliente{
    constructor(name, saldo){
        this.name = name;
        this.saldo = saldo;
    }
    converToString(){
        return `El nombre es ${this.name} y su saldo es ${this.saldo}`;
    }
    static darBienvenida(){
        // return `Welcome ${this.name}`; //welcome Cliente
        return `Welcome`; // Welcome

    }
}
const pedro = new Cliente('Pedro', 350);
console.log(pedro.converToString());
console.log(Cliente.darBienvenida());
// CLASS EXPRESION
const Cliente2 = class{
    constructor(name, saldo){
        this.name = name;
        this.saldo = saldo;
    }
    converToString(){
        return `El nombre es ${this.name} y su saldo es ${this.saldo}`;
    }
}
const juan = new Cliente2('Juan', 650);
console.log(juan.converToString());