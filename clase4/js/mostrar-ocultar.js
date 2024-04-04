// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
/*
    posibilidades
    caja.style.backgroundColor      
    caja.style.visibility           'hidden' | 'visible'
    caja.style.opacity              '0'|'0%' | '1' | '100%'
    caja.style.display              'none' | 'block'
*/


// Declaramos funciones de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}