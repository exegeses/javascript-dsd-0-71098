// ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

/* declaración de funciones */
function pintar( colorFondo, nombreColor, grados )
{
    caja.style.backgroundColor = colorFondo;
    caja.innerText = nombreColor;
    caja.style.rotate = grados;
}

function saludar( nombre )
{
    console.log('Saludo:', 'Hola '+ nombre );

}

//invocamos función + pasamos parámetro
saludar('Marcos'); 
saludar('Brenda'); 
saludar('Mateo'); 