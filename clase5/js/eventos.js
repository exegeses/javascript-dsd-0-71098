// ubicamos elementos dentro del DOM
const boton = document.querySelector('#boton');
const frase = document.querySelector('#frase');

//boton.addEventListener('evento', acción);
boton.addEventListener(
        'click', 
        function()
        {
            frase.innerText = 'Hiciste click!';
        }   
    );
boton.addEventListener(
        'mouseover',
        function()
        {
            frase.innerText = 'mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        function()
        {
            frase.innerText = 'reposo';
        }
);

frase.addEventListener(
        'contextmenu',
        function(evento){
            //evetar la acción prederminada
            evento.preventDefault();// no aparece el menu contectual
            frase.innerText = 'no se puede hacer eso';
        }
)