// CLASS DECLARATION
class Cliente{
    constructor(name, saldo){
        this.name = name;
        this.saldo = saldo;
    }
}
const pedro = new Cliente('Pedro', 350);
console.log(pedro);

// CLASS EXPRESION
const Cliente2 = class{
    constructor(name, saldo){
        this.name = name;
        this.saldo = saldo;
    }
}
const juan = new Cliente2('Juan', 650);
console.log(juan);