//OBJECT LITERAL
const vanish = {
    nombre: 'Vanish x750',
    precio: 7.20
}
console.log(vanish);

//OBJECT CONSTRUCTOR
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

detergente = new Producto('Ariel x1kg',6.3);
console.log(detergente);

//FORMATEO DE UN OBJECT CONTRUCTOR
function formatObjectConstructorProducto(producto){
    const {nombre,precio} = producto;
    return `El producto ${nombre} tiene un costo de ${precio}`;
}

console.log(formatObjectConstructorProducto(detergente));