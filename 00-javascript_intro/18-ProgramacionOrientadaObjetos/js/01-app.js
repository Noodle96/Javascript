// CLASS DECLARATION
class Cliente{
    #name;
    constructor(name, saldo){
        this.#name = name;
        this.saldo = saldo;
    }
    converToString(){
        return `El nombre es ${this.#name} y su saldo es ${this.saldo}`;
    }
    static darBienvenida(){
        // return `Welcome ${this.name}`; //welcome Cliente
        return `Welcome Cliente`; // Welcome
    }
}

class Empresa extends Cliente{
    constructor(name,saldo,telefono,categoria){
        super(name,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static darBienvenida(){ // REESCRIBIENDO EL METODO DE CLIENTE
        return `Welcome Empresa`; // Welcome
    }
}



const pedro = new Cliente('Pedro', 350);
// console.log(pedro.#name); //error ya que es privado
console.log(pedro);
console.log(pedro.converToString());
console.log(Cliente.darBienvenida()); // welcome Cliente

const empresa1 = new Empresa('TechIA',5000,99999999,'Tech');
console.log(empresa1);
console.log(Empresa.darBienvenida()); //Welcoe empresa

// CLASS EXPRESION
// const Cliente2 = class{
//     constructor(name, saldo){
//         this.name = name;
//         this.saldo = saldo;
//     }
//     converToString(){
//         return `El nombre es ${this.name} y su saldo es ${this.saldo}`;
//     }
// }
// const juan = new Cliente2('Juan', 650);
// console.log(juan.converToString());