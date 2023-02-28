// 01- DECLARACION DE STRINGS
const producto = 'elias \"';
const producto2 = String('alias "');
const producto3 = new String('elias');
// console.log(producto)
// console.log(producto2);
// console.log(producto3);


//02-LEN DE UN STRING
const card = 'princess legendary';
// console.log(card.length);

//ENCONTRAR UNA CADENA DENTRO DE OTRA
// console.log(card.indexOf('legendary')); // 9
// console.log(card.indexOf('caballero')); // -1
// console.log(card.includes('Princess')); //false
// console.log(card.includes('princess')); //true


//03-CONCATENAR STRING Y TEMPLATE STRING
const card2 = 'Princess';
const elixir = '4';
// console.log( card.concat(elixir));
// console.log('La carta '+ card2 + ' cuesta ' + elixir + ' de elixir' );
// console.log('La carta ',card2, ' cuesta ' , elixir ,    ' de elixir' );
// console.log(`La carta ${card2} cuesta ${elixir} de elixirr`);


// 04-CORTAR ESPACIOS BLANCOS DE UN STRING
const edad = ' abc ';
console.log(edad.length); // 5
console.log(edad.trimStart().trimEnd().length);//3
console.log(edad.trim().length); // 3

//05- MAIN STRING METODOS, REPLACE-SLICE-SUBSTRING
//REPLACE PARA REEMPLAZAR
const description = 'this is good description';
console.log(description.replace('good','espectacular'));

//SLICE PARA CORTAR
console.log(description.slice(0,3)); //thi
console.log(description.slice(3,0));//nothing

//ALTERNATIVA A SLICE
console.log(description.substring(0,3)); //thi
console.log(description.substring(3,2)); //i , ya que lo inytercambia a substring(2,3)

//06-REPEAT AND SPLACE
//REPEAR => REPETIR UNA CADENA DE TEXTO
const texto = 'template'.repeat(3);
console.log(texto); //templatetemplatetemplate

//SPLIT
const activo = 'laptop gamer 27j';
console.log(activo.split(' ')); // ['laptop', 'gamer', '27j']

//07 LOWERCASE AND UPPERCASE
const apellido = 'Gomez';
console.log(apellido.toUpperCase());
console.log(apellido.toLowerCase());

const ageOfX = 450;
console.log(ageOfX);
console.log(ageOfX.toString());

