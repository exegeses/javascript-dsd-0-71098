// ubicamos elementos dentro DOM
const mensaje = document.querySelector('#mensaje');
/*
    mostrar la fecha
    formato   25/03/2024
*/
// creamos objeto de fecha
const fecha = new Date();
console.log( 'fecha:', fecha );

// Obtenemos el número del día del mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}

console.log( 'día de mes:', diaMes );

// Obtenemos el número del mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0'+ mes;
}

console.log( 'mes actual:', mes );

// Obtenemos el número del año actual
let anio = fecha.getFullYear();
console.log( 'añio actual:', anio );

// Escribimos en el spam con el id mensaje
    // concatenación 
mensaje.innerText = diaMes +'/'+ mes +'/'+ anio;