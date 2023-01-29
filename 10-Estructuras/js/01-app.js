//01-CREANDO IF
//02-COMPARADOR ESTRICTO
//03-COMPARANDO MAYOR O MENOR
//04-ELIF
//05-SWITch
console.log('05-Switch');
const dayRest = 'Miercoles';
switch (dayRest) {
    case 'Lunes':
        console.log(`El día descanso es ${dayRest}`);
        break;
    case 'Martes':
        console.log(`El día descanso es ${dayRest}`);
    case 'Miercoles':
        console.log(`El día descanso es ${dayRest}`);
        break;
    case 'Jueves':
        console.log(`El día descanso es ${dayRest}`);
    case 'Viernes':
        console.log(`El día descanso es ${dayRest}`);
        break;
    case 'Sabado':
        console.log(`El día descanso es ${dayRest}`);
    case 'Domingo':
        console.log(`El día descanso es ${dayRest}`);
    default:
        console.log(`Día mal tipeado`);
        break;
}
//06 EL OPERADOR && PARA QUE SE CUMPLA DOS CONDICIONES => IF (A && B){here}
//07 EL OPERADOR OR ||
//08-DETENER LA EJECUCION DE UN IF CON UNA FUNCION
console.log('08---');
// function test(){
//     //code
//     return;

//     //code
//     return;
// }

//09-OPERADOR TERNARIO
const autenticado = true;
console.log(autenticado?'Si esta Autenticado': 'No esta autenticado');

