/* 
costos fijos  -> cf
precio de venta  -> pv
costos variables  -> cv
 */

//ubicamos elementos dentyo del DOM
const mensaje = document.querySelector('#mensaje');

/* 
    pe = cf / ( pv - cv )
*/
function calcularPE()
{
    let cf = prompt('ingrese monto de costos fijos');
    let pv = prompt('ingrese monto de precio de venta');
    let cv = prompt('ingrese monto de costos variables');
    let pe = cf / ( pv - cv ); 
    mensaje.innerText = pe
}