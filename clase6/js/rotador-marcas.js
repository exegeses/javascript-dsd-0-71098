// ubicamos elementos dentro del DOM
/*const rotador = document.querySelector('#rotador');
console.log(rotador);*/
const botones = document.querySelectorAll('#rotador img');
    console.log(botones);
const span = document.querySelector('#rotador span');
    console.log(span);

//botones
const anterior = botones[0];
const siguiente = botones[1];

const marcas = [
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale', 'Tommy', 'Hollister',
    'Gola', 'Kingpin', 'Old Navy',
    'Fitch'
   ];
const largo = marcas.length;

//estado inicial
let llave = 4;
span.innerText = marcas[ llave ];

anterior.addEventListener(
        'click',
        () => {
            llave--;//llave = llave - 1;
            if( llave < 0 ){
                llave = largo -1;
            }
            span.innerText = marcas[ llave ];
        }
);

siguiente.addEventListener(
        'click',
        () => {
            llave++; //llave = llave + 1;
            if( llave == largo ){
                llave = 0;
            }
            span.innerText = marcas[ llave ];
        }
);