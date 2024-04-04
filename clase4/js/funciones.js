/* ubicar elementos dentro del DOM */
const caja = document.getElementById('caja');

//declaramos funciones de control
function pintarVerde()
{
    //código interno de nustra función
    caja.style.backgroundColor = 'hsl(120, 45%, 50%)';
    caja.style.rotate = '-25deg';
    caja.innerText = 'Verde';
}

function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(30, 45%, 50%)';
    caja.style.rotate = '16deg';
    caja.innerText = 'Naranja';
}
function pintarCeleste()
{
    caja.style.backgroundColor = 'hsl(190, 45%, 50%)';
    caja.style.rotate = '200deg';
    caja.innerText = 'Celeste';
}