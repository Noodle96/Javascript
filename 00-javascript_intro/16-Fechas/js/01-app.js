const diaHoy = new Date();

// let valor;
// valor = diaHoy;
// valor = diaHoy.getFullYear();
// valor = diaHoy.getMonth(); // 0-1-2-3-4-5-....
// valor = diaHoy.getHours();
// valor = diaHoy.getMinutes();
// valor = diaHoy.getTime();
// valor = diaHoy;  
// console.log(valor);

moment.locale('es');
console.log(moment().format('MMMM Do Y h:mm:ss a') );
console.log(moment().format('LLLL'));

console.log(moment().add(3,'days').calendar());
